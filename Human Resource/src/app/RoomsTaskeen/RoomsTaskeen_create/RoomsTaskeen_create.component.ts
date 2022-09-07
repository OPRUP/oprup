import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taskeen } from 'src/app/Taskeen/Taskeen';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import Swal from 'sweetalert2';
import { RoomsTaskeen } from '../RoomsTaskeen';
import { RoomsTaskeenService } from '../RoomsTaskeen.service';

@Component({
  selector: 'app-RoomsTaskeen_create',
  templateUrl: './RoomsTaskeen_create.component.html',
  styleUrls: ['./RoomsTaskeen_create.component.scss']
})
export class RoomsTaskeen_createComponent implements OnInit {
  roomsTaskeen;
  form: FormGroup = new FormGroup({
    roomCode: new FormControl(''),
    bids:new FormControl(''),
    lockers: new FormControl(''),
    conditioners: new FormControl(''),
    tools:new FormControl(''),
  //  description:new FormControl(''),
    habitationId: new FormControl(''),


  });
  roomTaskeen = {
    roomId:'',
    roomCode: '',
    bids: '',
    lockers: '',
    conditioners: '',
    tools: '',
    description: '',
    deleteFlag: 1,
    taskeens:{
      habitationId:'',
      habitationName:''

    }
  }
  taskeens;
  roomsTaskeens!: RoomsTaskeen[];
  constructor(private roomsTaskeenService: RoomsTaskeenService, private taskeenService: TaskeenService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
     private translate: TranslateService
    ) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
     }
     public getAllTaskeens(): void{
      this.taskeenService.getAllTaskeen().subscribe((response:Taskeen[]) => {
      this.taskeens = response;
   
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      }
      )
      }


  ngOnInit() {
    this.getAllTaskeens();
    this.form = this.fb.group(
      {
        roomCode:['', Validators.required],
        bids:['',Validators.required],
        lockers: ['',Validators.required],
        conditioners: ['',Validators.required],
        tools: ['',Validators.required],
        // description:['',Validators.required],
        habitationId: ['',Validators.required],


      });
  }
  goRoomsTaskeensList(){
    this.router.navigate(['/operation/RoomsTaskeen/RoomsTaskeen'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onAddRoomsTaskeen(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }




        document.getElementById('add-taskeen-form')?.click();
      this.roomsTaskeenService.addRoomsTaskeen(this.roomTaskeen).subscribe(

        (response: RoomsTaskeen) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getAllRoomsTaskeen();
          this.goRoomsTaskeensList();
        },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')
        console.log(error);
      }
      );

      }

      public getAllRoomsTaskeen(): void{
        this.roomsTaskeenService.getAllRoomsTaskeen().subscribe(
          (response:RoomsTaskeen[]) => {
          this.roomsTaskeens = response;

        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}
