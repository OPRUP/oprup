import { File } from 'angular-feather/icons';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Employee, Employee03_Document } from '../employee';
import { EmployeeService } from '../employee.service';
import { Employee03DocumentService } from '../employee03Document.service';
@Component({
  selector: 'app-create-employee03-documents',
  templateUrl: './create-employee03-documents.component.html',
  styleUrls: ['./create-employee03-documents.component.scss']
})
export class CreateEmployee03DocumentsComponent implements OnInit {
  viewMode;
  employeeId!: number;
  employee!: Employee;
  selectedFile!: File;
  documents;
  emp03 = {
    documentId: '',
    documentType: '',
    documentNumber: '',
    documentDateExpiry: '',
    documentFile:'',
    deleteFlag: 1,
    employee:{
      employeeId:this.activateRoute.snapshot.params['id'],
    }
  }

  constructor(  private employeeService: EmployeeService,
                private documentService: Employee03DocumentService,
                private router: Router,
                private activateRoute: ActivatedRoute,
                public translate: TranslateService,
                private http: HttpClient )
  {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
  }
  ngOnInit(): void {
    this.viewMode = "tab03";
    this.getEmployee();
    this.getDocuments();

  }
  public getEmployee(): void
  {
    this.employeeId= this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId)
    .subscribe(data => {
      this.employee = data;

    }, error => console.log(error));
  }
  public onFileSelected(event){

    this.selectedFile=<File>event.target.files[0];
  }
  public onAddDocument(): void {
    document.getElementById('add-document-form')?.click();
    if(this.emp03.documentType == '' || this.emp03.documentType == null){
      Swal.fire('?????????? ??????', '?????? ?????????? ?????? ??????????????', 'warning')
    }
    else if(this.emp03.documentNumber == '' || this.emp03.documentNumber == null){
      Swal.fire('??????????', '?????? ?????????? ?????? ??????????????', 'warning')
    }
    else if(this.emp03.documentDateExpiry == '' || this.emp03.documentDateExpiry == null){
      Swal.fire('?????????? ??????', '?????? ?????????? ?????????? ???????????? ??????????????', 'warning')
    }
    else if(this.emp03.documentFile == '' || this.emp03.documentFile == null){
      Swal.fire('?????????? ??????', '?????? ?????????? ?????????? ???? ??????????????', 'warning')
    }
    else{
      this.emp03.documentFile= this.selectedFile.name;
      this.documentService.add(this.emp03).subscribe((response: Employee03_Document) => {
        const fillData= new FormData();
        fillData.append('image',this.selectedFile,this.selectedFile.name);
        this.http.post('http://localhost:4200/attachFiles/',fillData)
        .subscribe(res=>{

        });
        this.emp03.documentType ='';
        this.emp03.documentNumber ='';
        this.emp03.documentDateExpiry ='';
      Swal.fire('?????????? ??????', '?????? ?????????????? ??????????', 'success')
        this.emp03.documentFile ='';
          this.getDocuments()
        },
        (error) => {
          Swal.fire('?????????? ??????!! ', '?????? ???? ?????????? ??????????', 'error')
          console.log(error);
        }
      );
    }

   }
   public getDocuments(){
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.documentService.getDocumentsByEmployeeId(this.employeeId).subscribe(
      (response:any) => {
        this.documents = response;

      },
    )
  }
  public deleteEmployeeDocument(documentId){
    Swal.fire({
      icon: 'info',
      title:  '???? ?????? ?????????? ???? ?????? ??????????',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){
        this.documentService.deleteDocument(documentId).subscribe(
          (response) => {
            Swal.fire("?????? ??????", "???? ?????? ?????????? ??????????", 'success');
            this.getDocuments();
          },
          (error) => {
            Swal.fire("?????? ??????", "?????? ???? ?????? ??????????", 'error');
          }
        );
      }
      this.viewMode = "tab03";
      
    })
  }
}


















