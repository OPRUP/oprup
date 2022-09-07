import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Items } from '../items';
import { ItemsserviceService } from '../items.service';
import countries from '../../_files/countries.json';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.scss']
})
export class CreateItemsComponent implements OnInit {

  items!: Items[];
  itemsData = {
    itemId:'',
    itemCode:'',
    itemNameAr: '',
    itemNameEn: '',
    nationality: '',
    taxRate: 0.15,
    profession:'',
    hourlyRate:'',
    gender:'',
    Slip:'',
    foodAllowance:'',
    housingAllowance:'',
    otherAllowance:'',
   deleteFlag: 1,
 };

 form: FormGroup = new FormGroup({
    itemCode:new FormControl(''),
    itemNameAr: new FormControl(''),
    itemNameEn: new FormControl(''),
    nationality: new FormControl(''),
    profession:new FormControl(''),
    hourlyRate:new FormControl(''),
    gender:new FormControl(''),
    Slip:new FormControl(''),
    foodAllowance:new FormControl(''),
    housingAllowance:new FormControl(''),
    otherAllowance:new FormControl(''),
});


 countryList:{name:String,code:String}[]=countries;



  constructor(private itemsService:ItemsserviceService ,
    public fb: FormBuilder,

     private router: Router,
      private translate: TranslateService){

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }
   ngOnInit() {
    this.setvalues();
    this.form = this.fb.group(
      {
        itemCode:['', Validators.required],
        itemNameAr:['',[Validators.required]],
        itemNameEn: ['',[Validators.required]],
        nationality: ['',[Validators.required]],
        profession: ['',[Validators.required]],
        hourlyRate: ['',[Validators.required]],
        gender: ['',[Validators.required]],
        Slip: ['',[Validators.required]],
        foodAllowance: ['',[Validators.required]],
        housingAllowance: ['',[Validators.required]],
        otherAllowance: ['',[Validators.required]],
      }
    );
   }

   submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }

   goItemsList(){
     this.router.navigate(['sales/items/items'])
   }
   public onAddItems(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

     this.itemsService.addItems(this.itemsData).subscribe(
       (response) => {

         console.log(response);
         Swal.fire('Success', 'Items is added', 'success')
         this.itemsService.getAllItems();
         this.goItemsList();
       },
       (error: HttpErrorResponse) => {
        console.log(this.itemsData);

         alert(error.message);
         Swal.fire('Error!! ', 'Error while adding Items', 'error')
       }
     );
      }
        isValid
        =true;
      getotherAllowanceDetails(event){
         if(event=='Other'){
          this.isValid=false;
         }



        }

        username;
setvalues(){

  this.username

}

customerDetails;
    isLoggedIn=true;
    gethousingAllowance(event){
      console.log('gggggggggggg',event.target.value)
    this.username=event.target.value;
        this.itemsData.housingAllowance=this.username
    }

    getotherAllowance(event){
      console.log('gggggggggggg',event.target.value)
    this.username=event.target.value;
        this.itemsData.otherAllowance=this.username
    }


    getfoodAllowance(event){
      console.log('gggggggggggg',event.target.value)
    this.username=event.target.value;
        this.itemsData.foodAllowance=this.username
    }


}
