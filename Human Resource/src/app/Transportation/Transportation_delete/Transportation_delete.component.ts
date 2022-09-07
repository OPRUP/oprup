import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Transportation } from '../Transportation';
import { TransportationService } from '../Transportation.service';

@Component({
  selector: 'app-Transportation_delete',
  templateUrl: './Transportation_delete.component.html',
  styleUrls: ['./Transportation_delete.component.scss']
})
export class Transportation_deleteComponent implements OnInit {
  transportationMeanId!: number;
  transportation;
  transportations!: Transportation[];

  constructor(private transportationService: TransportationService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }


  ngOnInit() {
    this.getTransportation();
  }
  goTransportationList(){
    this.router.navigate(['/operation/Transportation/Transportation'])
  }
  public getTransportation(){
    this.transportationMeanId = this.activateRoute.snapshot.params['id'];
    this.transportationService.getTransportationById(this.transportationMeanId)
    .subscribe(data => {

      this.transportation = data;
    }, error => console.log(error));
  }
  public onDeleteTransportation(transportationMeanId): void{
    this.transportationService.deleteTransportation(this.transportation).subscribe( data => {
      
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goTransportationList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }

}
