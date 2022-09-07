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
  selector: 'app-KitchenTaskeen_edit',
  templateUrl: './KitchenTaskeen_edit.component.html',
  styleUrls: ['./KitchenTaskeen_edit.component.scss']
})
export class KitchenTaskeen_editComponent implements OnInit {
  form: FormGroup = new FormGroup({
    kitchenCode: new FormControl(''),
    gascylinders:new FormControl(''),
    gasStoves: new FormControl(''),
    tools:new FormControl(''),
    //description:new FormControl(''),
    habitationId: new FormControl(''),


  });
  taskeens!: Taskeen[];
  kitchenId!: number;
  kitchenTaskeen;
  kitchensTaskeen!: KitchenTaskeen[];

  constructor(private taskeenService: TaskeenService,
    private kitchenTaskeenService: KitchenTaskeenService,
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
    this.getKitchenTaskeen();
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
  goKitchenTaskeenList(){
    this.router.navigate(['/operation/KitchenTaskeen/KitchenTaskeen'])
    }
    submitted = false;
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    public getKitchenTaskeen(){
      this.kitchenId = this.activateRoute.snapshot.params['id'];
      this.kitchenTaskeenService.getKitchenRoomById(this.kitchenId)
      .subscribe(data => {

        this.kitchenTaskeen = data;
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
    public onUpdateKitchenTaskeen(Kict) {
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }

        this.kitchenTaskeenService.updateKitchenRoom(this.kitchenTaskeen).subscribe(
          (data) => {
            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisUpdated'), 'success')

       
            // this.getProject();
            this.goKitchenTaskeenList();
          },
          (error) => {
            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileupdatingData'), 'error')

            console.log(error);
          }
        );
      }
   }


