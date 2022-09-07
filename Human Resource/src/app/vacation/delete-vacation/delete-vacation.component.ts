import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Vacation } from '../vacation';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-delete-vacation',
  templateUrl: './delete-vacation.component.html',
  styleUrls: ['./delete-vacation.component.scss']
})
export class DeleteVacationComponent implements OnInit {

  vacationId!: number;
  vacation;
  vacations!: Vacation[];



  constructor(private vacationService: VacationService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    //this.getVacation();
    this.vacationId=this.activateRoute.snapshot.params['id'];
  }

  public onDeleteVacation(){

    // Swal.fire('Success', this.vacationId.toString(), 'success')
    this.vacationService.deleteVacation(this.vacationId).subscribe(
       (data) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')

      console.log(data);
      this.goVacationList();
    },
    (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      console.log(error);
    }
    );
  }
  goVacationList(){
    this.router.navigate(['/operation/vacation/vacations'])
  }
}
