import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taskeen } from 'src/app/Taskeen/Taskeen';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import Swal from 'sweetalert2';
import { KitchenTaskeen } from '../KitchenTaskeen';
import { KitchenTaskeenService } from '../KitchenTaskeen.service';

@Component({
  selector: 'app-KitchenTaskeen_create',
  templateUrl: './KitchenTaskeen_create.component.html',
  styleUrls: ['./KitchenTaskeen_create.component.scss']
})
export class KitchenTaskeen_createComponent implements OnInit {
  kitchensTaskeen;
  form: FormGroup = new FormGroup({
    kitchenCode: new FormControl(''),
    gascylinders:new FormControl(''),
    gasStoves: new FormControl(''),
    tools:new FormControl(''),
    // description:new FormControl(''),
    habitationId: new FormControl(''),


  });
  kitchenTaskeen = {
    kitchenId:'',
    kitchenCode: '',
    gascylinders: '',
    gasStoves: '',
    tools: '',
    description: '',
    deleteFlag: 1,
    taskeens:{
      habitationId:'',
      habitationName:''

    }
  }
  taskeens;
  kitchensTaskeens!: KitchenTaskeen[];

  constructor(private kitchenTaskeenService: KitchenTaskeenService, private taskeenService: TaskeenService,
    private router: Router,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private activateRoute: ActivatedRoute,
     private translate: TranslateService) {
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
    this.getAllTaskeens()
    this.form = this.fb.group(
      {
        kitchenCode:['', Validators.required],
        gascylinders:['',Validators.required],
        gasStoves: ['',Validators.required],
        tools: ['',Validators.required],
        // description:['',Validators.required],
        habitationId: ['',Validators.required],


      });
  }
  goKitchenTaskeensList(){
    this.router.navigate(['/operation/KitchenTaskeen/KitchenTaskeen'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public onAddKitchenTaskeen(): void {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }




        document.getElementById('add-kitchenTaskeen-form')?.click();
      this.kitchenTaskeenService.addKitchenRoom(this.kitchenTaskeen).subscribe(

        (response: KitchenTaskeen) => {
          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
          this.getAllKitchenRooms();
          this.goKitchenTaskeensList();
        },
      (error: HttpErrorResponse) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
      );


      }
      public getAllKitchenRooms(): void{
        this.kitchenTaskeenService.getAllKitchenRoom().subscribe(
          (response:KitchenTaskeen[]) => {
          this.kitchensTaskeens = response;
         
        },
        (error: HttpErrorResponse) => {
              alert(error.message);
            }
        )
      }

}

