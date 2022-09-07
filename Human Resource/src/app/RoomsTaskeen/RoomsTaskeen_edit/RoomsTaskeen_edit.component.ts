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
  selector: 'app-RoomsTaskeen_edit',
  templateUrl: './RoomsTaskeen_edit.component.html',
  styleUrls: ['./RoomsTaskeen_edit.component.scss']
})
export class RoomsTaskeen_editComponent implements OnInit {
  form: FormGroup = new FormGroup({
    roomCode: new FormControl(''),
    bids:new FormControl(''),
    lockers: new FormControl(''),
    conditioners: new FormControl(''),
    tools:new FormControl(''),
    // description:new FormControl(''),
    habitationId: new FormControl(''),


  });
  taskeens!: Taskeen[];
  roomId!: number;
  roomTaskeen;
 roomsTaskeen!:RoomsTaskeen[]

 constructor( private taskeenService: TaskeenService,
  private roomsTaskeenService: RoomsTaskeenService,
  private router: Router,
  public fb: FormBuilder, // Form Builder service for Reactive forms
   private activateRoute: ActivatedRoute,
   private translate: TranslateService ) {
     this.translate.setDefaultLang('ar');
 const lang = localStorage.getItem('lang')  || 'ar';
 this.translate.use(lang);
 document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getTaskeens();
    this.getRoomTaskeen();
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
  goRoomsTaskeenList(){
    this.router.navigate(['/operation/RoomsTaskeen/RoomsTaskeen'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public getRoomTaskeen(){
      this.roomId = this.activateRoute.snapshot.params['id'];
      this.roomsTaskeenService.getRoomsTaskeenById(this.roomId)
      .subscribe(data => {

        this.roomTaskeen = data;
      }, error => console.log(error));
    }
    public getTaskeens(): void{
      this.taskeenService.getAllTaskeen().subscribe(
        (data:Taskeen[]) => {
        this.taskeens = data;

      },
      (error: HttpErrorResponse) => {
            alert(error.message);
            //Swal.fire(error.message);
          }
      )
    }
    public onUpdateRoomsTaskeen(Rom) {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

        this.roomsTaskeenService.updateRoomsTaskeen(this.roomTaskeen).subscribe(
          (data) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')
            
            // this.getProject();
            this.goRoomsTaskeenList();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')
            console.log(error);
          }
        );
      }
   }

