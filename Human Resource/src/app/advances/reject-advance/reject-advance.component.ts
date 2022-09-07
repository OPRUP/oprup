import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Advance } from '../advance';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-reject-advance',
  templateUrl: './reject-advance.component.html',
  styleUrls: ['./reject-advance.component.scss']
})
export class RejectAdvanceComponent implements OnInit {

  advanceId;
  advance;


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private advanceService: AdvanceService,
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getAdvance();
  }

  public getAdvance(){
    this.advanceId = this.activateRoute.snapshot.params['id'];
    this.advanceService.getAdvanceById(this.advanceId).subscribe(data => {

      this.advance = data;
    }, error => console.log(error));
  }

  public onReject(advance: Advance){
    this.advanceService.rejectAdvance(advance).subscribe( data => {
     
      Swal.fire('Success', 'advance i rejected', 'success')
     // this.getAdvance();
      this.goAdvances();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire('Error!! ', 'Error while reject advance', 'error')
    }
    );
  }

  goAdvances(){
    this.router.navigate(['/operation/advances/advance-print']);
  }


}
