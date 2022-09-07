import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as Chart from 'chart.js';
import { number } from 'echarts';
import Swal from 'sweetalert2';
import { FollowupService } from '../followup.service';

@Component({
  selector: 'app-dashboard-follow',
  templateUrl: './dashboard-follow.component.html',
  styleUrls: ['./dashboard-follow.component.scss'],
})
export class DashboardFollowComponent implements OnInit {
  EmployeeCount;
  ContractCount;

  NumOfEmployee: any = localStorage.getItem('countofemployee');
  NumOfProject: any = localStorage.getItem('projectcount');
  NumOfExitEmployee: any = localStorage.getItem('countofexitemployee');
  NumOfTravelingEmployee: any = localStorage.getItem(
    'countoftravelingemployee'
  );
  ExpiryResidenceinWeekCount: any;
  ExpiryResidenceinWeekCount2: any;
  CountofExistingWorkers: any = localStorage.getItem('countofexistingWorkers');
  ExpiryResidenceinWeek: any = localStorage.getItem('residenceinweek');
  ExpiryResidenceinTwoWeek: any = localStorage.getItem('residenceintwoweek');
  ExpiryResidenceinThreeWeek: any = localStorage.getItem(
    'residenceinthreeweek'
  );
  ExpiryResidenceinFourWeek: any = localStorage.getItem('residenceinfourweek');
  //Hokomi
  CountofEmployeeNotHaveMedicalResult: any = localStorage.getItem(
    'countbyMedicalResult'
  );
  CountofEmployeeNotHaveInsurance: any =
    localStorage.getItem('countbyInsurance');
  CountofEmployeeNotHaveResidence: any =
    localStorage.getItem('countbyResidence');
  //pass port
  ExpiryPassPortinMonth: any = localStorage.getItem('passportinmonth');
  ExpiryPassPortinTwoMonth: any = localStorage.getItem('passportintwomonth');
  ExpiryPassPortinThreeMonth: any = localStorage.getItem(
    'passportinthreemonth'
  );
  ExpiryPassPortinFourMonth: any = localStorage.getItem('passportinfourmonth');
  //qiwa

  ExistEmployee: number = this.NumOfEmployee - this.NumOfTravelingEmployee;
  constructor(
    public service: FollowupService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.service.getEmployeeCount();
    this.service.getCreditCardCount();
    this.service.getTravelingEmployee();
    this.service.getExitEmployeeCount();
    this.service.getResidenceExpiryInWeek();
    this.service.getResidenceExpiryInTwoWeek();
    this.service.getResidenceExpiryInThreeWeek();
    this.service.getResidenceExpiryInFourWeek();
    this.service.getTravellingEmployee();
    //pass port
    this.service.getPassPortExpiryInMonth();
    this.service.getPassPortExpiryInTwoMonth();
    this.service.getPassPortExpiryInThreeMonth();
    this.service.getPassPortExpiryInFourMonth();
    //Hokomi
    this.service.getEmployeeNotHaveMedical();
    this.service.getEmployeeNotHaveinsurance();
    this.service.getEmployeeNotHaveResidence();
    //project
    this.service.getProjectCount();
    //qiwa
    this.service.getQiwaEmployeeCount();
  }

  ngOnInit(): void {
    // this.getresinweek();
    this.getContracts();
    //start charts
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [
          this.translate.instant('nextweek'),
          this.translate.instant('nexttwoweek'),
          this.translate.instant('nextthreeweek'),
          this.translate.instant('nextfourweek'),
        ],
        datasets: [
          {
            label: this.translate.instant('residenceexpiryinweeks'),
            data: [
              this.ExpiryResidenceinWeek,
              this.ExpiryResidenceinTwoWeek,
              this.ExpiryResidenceinThreeWeek,
              this.ExpiryResidenceinFourWeek,
            ],
            backgroundColor: [
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
            ],
            borderColor: [
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    //chart 2
    const myPassPortChart = new Chart('myPassPortChart', {
      type: 'bar',
      data: {
        labels: [
          this.translate.instant('nextmonth'),
          this.translate.instant('nexttwomonth'),
          this.translate.instant('nextthreemonth'),
          this.translate.instant('nextfourmonth'),
        ],
        datasets: [
          {
            label: this.translate.instant('passportexpiryinmonths'),
            data: [
              this.ExpiryPassPortinMonth,
              this.ExpiryPassPortinTwoMonth,
              this.ExpiryPassPortinThreeMonth,
              this.ExpiryPassPortinFourMonth,
            ],
            backgroundColor: [
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0.5)',
            ],
            borderColor: [
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
    //pie chart
    const myChart2 = new Chart('myPieChart', {
      type: 'pie',
      data: {
        labels: [
          this.translate.instant('withintheKingdom'),
          this.translate.instant('TravelersoutsidetheKingdom'),
          this.translate.instant('finalexit'),
        ],
        datasets: [
          {
            label: this.translate.instant('employeevacations'),
            data: [
              this.NumOfEmployee,
              this.NumOfTravelingEmployee,
              this.NumOfExitEmployee,
            ],
            backgroundColor: [
              'rgba(000, 000, 000, 1)',
              'rgba(000, 000, 000, 0.5)',
              'rgba(000, 000, 000, 0)',
            ],
          },
        ],
      },
    });

    //poe chart 2
    const PassPortPieChart = new Chart('PassPortPieChart', {
      type: 'pie',
      data: {
        labels: [
          this.translate.instant('Workerswhodonothaveamedicalexamination'),
          this.translate.instant('Workerswhodonothavehealthinsurance'),
          this.translate.instant('Workerswhodonothaveresidency'),
        ],
        datasets: [
          {
            label: this.translate.instant('Hokomidetails'),
            data: [
              this.CountofEmployeeNotHaveMedicalResult,
              this.CountofEmployeeNotHaveInsurance,
              this.CountofEmployeeNotHaveResidence,
            ],
            backgroundColor: [
              'rgb(000, 000, 000)',
              'rgb(255, 255, 255)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }

  public getContracts(): void {
    this.service.getContractCount().subscribe(
      (response) => {
        this.ContractCount = response;
      },
      (error) => {
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }
}
