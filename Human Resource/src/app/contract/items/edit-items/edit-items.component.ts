import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Items } from '../items';
import { ItemsserviceService } from '../items.service';
import countries from '../../_files/countries.json';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.scss']
})
export class EditItemsComponent implements OnInit {

  itemsId!: number;
  items;
  item!:Items[];


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
  private router: Router ,

  private activateRoute: ActivatedRoute,
  private translate: TranslateService){
  this.translate.setDefaultLang('ar');
  const lang = localStorage.getItem('lang')  || 'ar';
  this.translate.use(lang);
  document.documentElement.lang = lang;
  }



  ngOnInit() {
  this.getItems();

  this.form = this.fb.group(
    {
      itemCode:['', Validators.required],
      itemNameAr:['',Validators.required],
      itemNameEn: ['',Validators.required],
      nationality: ['',Validators.required],
      profession: ['',Validators.required],
      hourlyRate: ['',Validators.required],
      gender: ['',Validators.required],
      Slip: ['',Validators.required],
      foodAllowance: ['',Validators.required],
      housingAllowance: ['',Validators.required],
      otherAllowance: ['',Validators.required],
    }
  );


  }





  goItemsList(){
  this.router.navigate(['/sales/items/items/'])
  }

  public getItems(){
   this.itemsId= this.activateRoute.snapshot.params['id'];
  this.itemsService.getItemsById(this.itemsId)
  .subscribe(data => {
    this.items = data;
    console.log(data)
  }, error => console.log(error));


  }


  submitted = false;
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }


  public onUpdateItems(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  this.itemsService.updateItems(this.items).subscribe(
  (response) => {
  console.log(response);
  Swal.fire('Success', 'Item Information is Updated', 'success')
  this.goItemsList();
  },
  (error: HttpErrorResponse) => {
  alert(error.message);
  Swal.fire('Error!! ', 'Error while update Item', 'error')
  }
  );
  }
}
