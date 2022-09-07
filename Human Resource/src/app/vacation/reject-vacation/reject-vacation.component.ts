import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
    selector: 'app-reject-vacation',
    templateUrl: './reject-vacation.component.html',
    styleUrls: ['./reject-vacation.component.scss']
  })
export class RejectVacationComponent implements OnInit {

  vacationId;
  vacation;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private vacationService: VacationService,
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getVacation();
  }

  public getVacation(){
    this.vacationId = this.activateRoute.snapshot.params['id'];
    this.vacationService.getVacationById(this.vacationId).subscribe(data => {
      console.log(data)
      this.vacation = data;
    }, error => console.log(error));
  }

  public onReject(vacation: Vacation){
    this.vacationService.rejectVacation(vacation).subscribe( data => {
      console.log(data);
      Swal.fire(this.translate.instant('success'), this.translate.instant('Vacationirejected'), 'success')

     // this.getAdvance();
      this.goVacation();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire('Error!! ', 'ErrorwhilerejectVacation', 'error')
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhilerejectVacation'), 'error')
    }
    );
  }

  goVacation(){
    this.router.navigate(['/vacation/vacations']);
  }

}
