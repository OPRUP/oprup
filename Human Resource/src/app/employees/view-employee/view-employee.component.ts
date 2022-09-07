import { Employee05_AddressService } from './../Employee05_Address.service';
import { Employee03DocumentService } from './../employee03Document.service';
// import { Employee } from 'src/app/employees/employee';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, Employee03_Document, Employee_HabitationAndTransport } from '../employee';
import { EmployeeService } from '../employee.service';

import {  ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { University } from 'src/app/universities/university';
import { HttpErrorResponse } from '@angular/common/http';
import { Major } from 'src/app/majors/major';
import { MajorService } from 'src/app/majors/major.service';
import { Qualification } from 'src/app/qualifications/qualification';
import { QualificationService } from 'src/app/qualifications/qualification.service';
import { UniversityService } from 'src/app/universities/university.service';
import { Employee06_QualificationService } from '../Employee06_Qualification.service';
import { Employee07_WorkExperienceService } from '../Employee07_WorkExperience.service';
import { Employee10_HealthInsuranceService } from '../Employee10_hokome.service';
import { Employee08_BankAccountService } from '../Employee08_BankAccount.service';
import { BankService } from 'src/app/banks/bank.service';
import { Bank } from 'src/app/banks/bank';
import { Employee11_EmployedInformationService } from '../Employee11_EmployedInformation.service';
import { ContractDetailService } from '../contract-detail.service';
import { Employee09_ContractService } from '../Employee09_Contract.service';
import { TransportationService } from 'src/app/Transportation/Transportation.service';
import { Transportation } from 'src/app/Transportation/Transportation';
import { EmployeeResidenceAndTransportationService } from '../EmployeeResidenceAndTransportation.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  contracts;
  employeeId!: number;
  healthId!: number;
  employee;
  employees!: Employee[];
  viewMode;
  documents;
  empQualifications;
  universities;
  majors;
  qualifications;
  addresses;
  experiences;
  empBanks;
  empHealthInsurances;
  bank;
  employedInfo;
  allowanceCounter;
  deductionCounter;
  TransportationHabitations;
  habitation;
  room;
  transportation;
  // emp03 = {
  //   documentId: '',
  //   documentType: '',
  //   documentNumber: '',
  //   documentDateExpiry: '',
  //   documentFile:'',
  //   deleteFlag: 1,
  //   employee:{
  //     employeeId:this.activateRoute.snapshot.params['id'],
  //   }
  // }

  emp05 = {
    addressId: '',
    email: '',
    countryAddress: '',
    countryContactNumber: '',
    residenceAddress: '',
    residenceContactNumber: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  };
  emp06 = {
    empQualificationId: '',
    dateFrom: '',
    dateTo: '',
    degree: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    university:{
      universityId:'',
    },
    qualification:{
      qualificationId:'',
    },
    major:{
      majorId:'',
    },
  };

  emp07 = {
    experienceId: '',
    companyName: '',
    jobTitle: '',
    dateFrom: '',
    dateTo: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  };
  emp08 = {
    empBankId: '',
    bankBranch: '',
    accountNumber: '',
    accountType: '',
    iban: '',
    swiftCode: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    bank:{
      bankId:'',
    }
  };
  emp10 = {
    healthId: '',
    visa: '',
    startVisaDate: '',
    endVisaDate:'',
    jobByVisa: '',
    typeVisa: '',
    enterVisaDate: '',
    medicalExaminationCode: '',
    procedureDate:'',
    medicalResultDate: '',
    medicalTestResult: '',
    insurancesCode: '',
    insurancesType: '',
    insurancesStartDate:'',
    insurancesEndDate: '',
    //residenceNumber: '',
    residenceIssue: '',
    // residenceExpiry:'',
    jobByResidence: '',
    warrantyDate: '',
    // exitDate: '',
    hijriWarrantyDate: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },

  };
  emp11 = {
    employeeResTransId: '',
    shift: '',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    },
    habitation:{
      habitationId:'',
      habitationName:'',
    },
    room:{
      roomId:'',
      roomCode: '',
    },
    transportation:{
      transportationMeanId:'',
      transportationMeanCode: '',
    }
  };
  constructor(  private employeeService: EmployeeService,
                private activateRoute: ActivatedRoute,
                private translate: TranslateService,
                private docService:Employee03DocumentService,
                private emp11_emp: Employee11_EmployedInformationService,
                private addressService: Employee05_AddressService,
                private emp06_qualification: Employee06_QualificationService,
                private universityService:UniversityService,
                private majorService:MajorService,
                private qualificationService:QualificationService,
                private emp07_work: Employee07_WorkExperienceService,
                private emp08_bank: Employee08_BankAccountService,
                private emp09_contract: Employee09_ContractService,
                private emp10_health: Employee10_HealthInsuranceService,
                private bankService: BankService,
                private contractDetailService: ContractDetailService,
                private employeeResidenceAndTransportationService: EmployeeResidenceAndTransportationService

                ){
                  this.translate.setDefaultLang('ar');
                  const lang = localStorage.getItem('lang')  || 'ar';
                  this.translate.use(lang);
                              }
    ngOnInit() {
    this.viewMode = "tab01";
    this.getEmployee();
    // this.getDocuments();
    this.getAddresses();
    this.getEmployeeQualification();
    this.getUniverties();
    this.getMajors();
    this.getQualification();
    this.getExperiences();
    this.getEmployeeHeath();
    this.getBank();
    this.getEmpBank()
    this.getEmpEmployed();
    this.getContracts();
    this.getTransportationHabitation();

    console.log(this.viewMode);
  }
  public getEmployee(): void{
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;
      console.log(data)
    }, error => console.log(error));
  }
  // public getDocuments(){
  //   this.employeeId = this.activateRoute.snapshot.params['id'];
  //   this.docService.getDocumentsByEmployeeId(this.employeeId).subscribe(
  //     (response:any) => {
  //       this.documents = response;
  //       // this.viewMode = "tab03";
  //       this.getDocuments();
  //       console.log(this.documents);
  //     },
  //   )
  // }
  public getAddresses(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.addressService.getAddressesByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.addresses = response;
        console.log(this.addresses);
      },
    )
  }
  public getEmployeeQualification(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp06_qualification.getQualificationByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.empQualifications = response;
        console.log(this.empQualifications);
      },
    )
  }
  public getUniverties(): void{
    this.universityService.getUniversities().subscribe(
      (response:University[]) => {
      this.universities = response;
      console.log(this.employees);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getMajors(): void{
    this.majorService.getMajors().subscribe(
      (response:Major[]) => {
      this.majors = response;
      console.log(this.majors);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getQualification(): void{
    this.qualificationService.getQualifications().subscribe(
      (response:Qualification[]) => {
      this.qualifications = response;
      console.log(this.qualifications);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getExperiences(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp07_work.getExperiencesByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.experiences = response;
        console.log(this.experiences);
      },
    )
  }
  public getContracts(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp09_contract.getContractsByEmployeeId(this.employeeId).subscribe(
      (response:any) => {

        this.contracts = response;
        console.log(this.contracts);
      },
    )
  }



  public getEmpBank(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp08_bank.getBankByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.empBanks = response;
        console.log(this.empBanks);
      },
    )
  }
  public getEmployeeHeath(){
    this.healthId = this.activateRoute.snapshot.params['id'];
    this.emp10_health.getById(this.healthId).subscribe(
      (response:any) => {
        this.empHealthInsurances = response;
        console.log('hokme',this.empHealthInsurances);
      },
    )
  }
  public getBank(): void{
    this.bankService.getBanks().subscribe(
      (response:Bank[]) => {
      this.bank = response;
      console.log(this.bank);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }
  public getTransportationHabitation(): void{
    this.employeeResidenceAndTransportationService.get().subscribe(
      (response:Employee_HabitationAndTransport[]) => {
      this.TransportationHabitations = response;
      console.log(this.TransportationHabitations);
    },
    (error: HttpErrorResponse) => {
          alert(error.message);
        }
    )
  }


  public getEmpEmployed(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.emp11_emp.getEmployedByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.employedInfo = response;
        console.log(this.employedInfo);
      },
    )
  }

  viewFlag=true;
  toggleDivs(){
    this.viewFlag=false
  }
    printPage() {
      this.viewFlag=false
      window.print();
    }


}
