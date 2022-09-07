import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SlipService } from '../slip.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  slipId;
  slip;
  constructor(
    private slipService: SlipService,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,


  ) { }

  ngOnInit() {
    this.slipId = this.activateRoute.snapshot.params['id'];
    this.getSlipBySlipId();
  }



  public getSlipBySlipId() {
    this.slipId = this.activateRoute.snapshot.params['id'];

    this.slipService.getSlipBySlip(this.slipId).subscribe(
      (data:any) => {
        this.slip = data;


      },
      (error: HttpErrorResponse) => {
        alert(error.message);
     
      }

    )
  }

}
