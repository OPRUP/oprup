import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Bank } from 'src/app/banks/bank';
import { BankService } from 'src/app/banks/bank.service';
import {
  Employee,
  Employee08_BankAccount,
  Employee11_EmployedInformation,
} from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import { Employee03DocumentService } from 'src/app/employees/employee03Document.service';
import { Employee05_AddressService } from 'src/app/employees/Employee05_Address.service';
import { Employee06_QualificationService } from 'src/app/employees/Employee06_Qualification.service';
import { Employee07_WorkExperienceService } from 'src/app/employees/Employee07_WorkExperience.service';
import { Employee08_BankAccountService } from 'src/app/employees/Employee08_BankAccount.service';
import { Employee09_ContractService } from 'src/app/employees/Employee09_Contract.service';
import { Employee10_HealthInsuranceService } from 'src/app/employees/Employee10_hokome.service';
import { Employee11_EmployedInformationService } from 'src/app/employees/Employee11_EmployedInformation.service';
import { Major } from 'src/app/majors/major';
import { MajorService } from 'src/app/majors/major.service';
import { Qualification } from 'src/app/qualifications/qualification';
import { QualificationService } from 'src/app/qualifications/qualification.service';
import { University } from 'src/app/universities/university';
import { UniversityService } from 'src/app/universities/university.service';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})



export class ReportComponent implements OnInit {

  @ViewChild('invoice') invoiceElement!: ElementRef;
  pdfTable!: ElementRef;

  @ViewChild('TABLE', { static: false })
  TABLE!: ElementRef;
  title = 'Excel';
  paginator: any;
  matSort: any;
  healthId: any;
  hokomeId: any;
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }
  @ViewChild('TABLE2', { static: false })
  TABLE2!: ElementRef;
  title2 = 'Excel';
  ExportTOExcel2() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE2.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }
  @ViewChild('TABLE3', { static: false })
  TABLE3!: ElementRef;
  title3 = 'Excel';
  ExportTOExcel3() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE3.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE4', { static: false })
  TABLE4!: ElementRef;
  title4 = 'Excel';
  ExportTOExcel4() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE4.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE5', { static: false })
  TABLE5!: ElementRef;
  title5 = 'Excel';
  ExportTOExcel5() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE5.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE6', { static: false })
  TABLE6!: ElementRef;
  title6 = 'Excel';
  ExportTOExcel6() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE6.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE7', { static: false })
  TABLE7!: ElementRef;
  title7 = 'Excel';
  ExportTOExcel7() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE7.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE8', { static: false })
  TABLE8!: ElementRef;
  title8 = 'Excel';
  ExportTOExcel8() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE8.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  @ViewChild('TABLE9', { static: false })
  TABLE9!: ElementRef;
  title9 = 'Excel';
  ExportTOExcel9() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE9.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }



  @ViewChild('TABLE10', { static: false })
  TABLE10!: ElementRef;
  title10 = 'Excel';
  ExportTOExcel10() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE10.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb,'ScoreSheet.xlsx');
  }
  // displayedColumns: string[] = [
  //   'EmployeeID',
  //   'employeeName',
  //   'employeeNameAr',
  //   'CompanyName',
  //   'NumberCompany',
  //   'NumberCompanySis',
  //   'PlaceOfBirth',
  //   'dateOfJoin',
  //   'DateOfLeaving',
  //   'gender',
  //   'maritalStatus',
  //   'residenceName',
  //   'residenceNumber',
  //   'residenceIssue',
  //   'residenceExpiry',
  // ];
  employees;
  documents;
  addresses: any;
  empQualifications: any;
  universities;
  majors;
  qualifications;
  experiences;
  banks;
  empHealthInsurances;

  emp03 = {
    documentId: '',
    documentType: '',
    documentNumber: '',
    documentDateExpiry: '',
    documentFile: '',
    deleteFlag: 1,
    employee: {
      employeeId: '',
    },
  };

  emp05 = {
    addressId: '',
    email: '',
    countryAddress: '',
    countryContactNumber: '',
    residenceAddress: '',
    residenceContactNumber: '',
    deleteFlag: 1,
    employee: {
      employeeId: '',
    },
  };

  emp07 = {
    experienceId: '',
    companyName: '',
    jobTitle: '',
    dateFrom: '',
    dateTo: '',
    deleteFlag: 1,
    employee: {
      employeeId: '',
    },
  };
  emp08 = {
    empBankId: '',
    bankBranch: '',
    accountNumber: '',
    accountType: '',
    iban: '',
    swiftCode: '',
    deleteFlag: 1,
    employee: {
      employeeId: '',
    },
    bank: {
      bankId: '',
      bankName: '',
    },
  };
  emp10 = {
    hokomeId: '',
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

    residenceIssue: '',

    jobByResidence: '',
    warrantyDate: '',

    hijriWarrantyDate: '',
    deleteFlag: 1,
    employee: {
      employeeId: this.activateRoute.snapshot.params['id'],
    },

  };

  viewMode;
  Contract = {
    contractType: '',
    vacationDayNumber: '',
    dateFrom: '',
    dateTo: '',
  };

  empInformation!: MatTableDataSource<Employee11_EmployedInformation>;

  constructor(
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    private docService: Employee03DocumentService,
    private addressService: Employee05_AddressService,
    private emp06_qualification: Employee06_QualificationService,
    private universityService: UniversityService,
    private majorService: MajorService,
    private qualificationService: QualificationService,
    private emp07_work: Employee07_WorkExperienceService,
    private emp08_bank: Employee08_BankAccountService,
    private emp10_health: Employee10_HealthInsuranceService,
    private emp11_Contract: Employee09_ContractService,
    private empl_information: Employee11_EmployedInformationService,

    private bankService: Employee08_BankAccountService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.viewMode = 'tab01';

    this.getEmployees();

    this.getAddresses();
    this.getEmployeeQualification();
    this.getUniverties();
    this.getMajors();
    this.getQualification();
    this.getExperiences();
    this.getEmployeeHeath();
    this.getAllBanks();
    this.getContarct();
    this.getEmployeeInformamation();


  }

  public getEmployees(): void {
    this.employeeService.get().subscribe(
      (data: Employee[]) => {
        this.employees = data;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );
  }
  public getDocuments() {
    this.docService.get().subscribe((response: any) => {
      this.documents = response;

      this.getDocuments();

    });
  }

  public getAddresses() {
    this.addressService.get().subscribe((response: any) => {
      this.addresses = response;

    });
  }

  public getExperiences() {
    this.emp07_work.get().subscribe((response: any) => {
      this.experiences = response;

    });
  }

  public getEmployeeQualification() {
    this.emp06_qualification.get().subscribe((response: any) => {
      this.empQualifications = response;

    });
  }

  public getUniverties(): void {
    this.universityService.getUniversities().subscribe(
      (response: University[]) => {
        this.universities = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMajors(): void {
    this.majorService.getMajors().subscribe(
      (response: Major[]) => {
        this.majors = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getQualification(): void {
    this.qualificationService.getQualifications().subscribe(
      (response: Qualification[]) => {
        this.qualifications = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllBanks(): void {
    this.bankService.get().subscribe(
      (response) => {
        this.banks = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getEmployeeHeath() {
    this.emp10_health.get().subscribe((response: any) => {
      this.empHealthInsurances = response;

    });
  }

  public getContarct() {
    this.emp11_Contract.get().subscribe((response: any) => {
      this.Contract = response;

    });
  }
  public getEmployeeInformamation() {
    this.empl_information.get().subscribe(
      (response: any) => {
        this.empInformation = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    const results: Employee[] = [];

    for (const employee of this.employees) {
      if (
        employee.employeeName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        employee.employeeNameAr.toLowerCase().indexOf(key.toLowerCase()) !==-1

      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }
  NumberFrom;
  NumberTo;

  public GetNumberEmployee(key: string, key2: string): void {}

  ngAfterViewInit() {}

  filterData($event: any) {
    this.employees.filter = $event.target.value;

  }


  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 2,allowTaint:true,useCORS:true }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/PNG');

      const fileWidth = 210;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
       PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save(`Reports.pdf`);
    });
  }
  public generatePDF2(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale:2,allowTaint:true,useCORS:true }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/PNG');

      const fileWidth = 300;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
       PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
       PDF.html(this.invoiceElement.nativeElement.innerHTML)
       PDF.save(`Reports.pdf`);
    });
  }

}
