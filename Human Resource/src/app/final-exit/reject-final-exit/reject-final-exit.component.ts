
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { FinalExit } from '../final-exit';
import { FinalExitService } from '../final-exit.service';

@Component({
  selector: 'app-reject-final-exit',
  templateUrl: './reject-final-exit.component.html',
  styleUrls: ['./reject-final-exit.component.scss']
})
export class RejectFinalExitComponent implements OnInit {

finalExitId;
finalExit;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private finalExitService: FinalExitService,
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getFinalExit();
  }

  public getFinalExit(){
    this.finalExitId = this.activateRoute.snapshot.params['id'];
    this.finalExitService.getFinalExitById(this.finalExitId).subscribe(data => {

      this.finalExit = data;
    }, error => console.log(error));
  }


  public onReject(finalExit: FinalExit){
    this.finalExitService.rejectFinalExit(this.finalExit).subscribe( data => {
  
      Swal.fire(this.translate.instant('success'), this.translate.instant('finalExititrejected'), 'success')
      this.goFinalExit();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);

      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhilerejectfinalExit'), 'error')
    }
    );
  }
  goFinalExit(){
    this.router.navigate(['/operation/finalExit/print-final-exit']);
  }

}
