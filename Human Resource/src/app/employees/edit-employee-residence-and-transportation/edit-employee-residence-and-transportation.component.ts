import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { number } from 'echarts';
import { RoomsTaskeenService } from 'src/app/RoomsTaskeen/RoomsTaskeen.service';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import { TransportationService } from 'src/app/Transportation/Transportation.service';
import Swal from 'sweetalert2';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeResidenceAndTransportationService } from '../EmployeeResidenceAndTransportation.service';

@Component({
  selector: 'app-edit-employee-residence-and-transportation',
  templateUrl: './edit-employee-residence-and-transportation.component.html',
  styleUrls: ['./edit-employee-residence-and-transportation.component.scss']
})
export class EditEmployeeResidenceAndTransportationComponent implements OnInit {

  viewMode;
  snackBar: any;
  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  habitation;
  room;
  transportation;
  roomByHabitation;
  residenceTransport;
  resTransData = {
    employeeResTransId: number,
    shift:'',
    transportation:{
      transportationMeanId:''
    },
    employee: {
      employeeId: this.activateRoute.snapshot.params['id'],
    },
    habitation: {
      habitationId: '',
    },
    room: {
      roomId: '',
    },
  };
  form: FormGroup = new FormGroup({
    shift: new FormControl(''),
    transportationMeanId: new FormControl(''),
    habitationId: new FormControl(''),
    roomId: new FormControl(''),
  });

  constructor(
    private employeeService: EmployeeService,
    private habitationTransportService: EmployeeResidenceAndTransportationService ,
    private taskeenService: TaskeenService,
    private roomService: RoomsTaskeenService,
    private transportService:TransportationService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public translate: TranslateService,
    public fb: FormBuilder, // Form Builder service for Reactive forms

  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.viewMode = 'tabResTrans';
    this.getEmployee();
    // this.getInsurance();
    this.getHabitation();
    this.getRoom();
    this.getTransport();
    this.GetResidenceTransformation();
    this.form = this.fb.group(
      {
        shift:['',Validators.required],
        transportationMeanId:['',Validators.required],
        habitationId:['',Validators.required],
        roomId:['',Validators.required],

      }

    );
  }

  public getEmployee(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.employeeService.getById(this.employeeId).subscribe(
      (data) => {
        this.employee = data;

      },
      (error) => console.log(error)
    );
  }
  public GetResidenceTransformation(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.habitationTransportService.getById( this.employeeId).subscribe(
      (data) => {
        this.residenceTransport = data;
        this.residenceTransport = this.residenceTransport.filter((element)=>{
          return element.deleteFlag == 1
        })

        this.resTransData.shift=this.residenceTransport[0].shift
        this.resTransData.transportation.transportationMeanId=this.residenceTransport[0].transportation.transportationMeanId
        this.resTransData.habitation.habitationId=this.residenceTransport[0].habitation.habitationId
        this.resTransData.room.roomId= this.residenceTransport[0].room.roomId
        this.resTransData.employeeResTransId=this.residenceTransport[0].employeeResTransId
      },
      (error) => console.log(error)
    );
  }
  public getHabitation(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.taskeenService.getAllTaskeen().subscribe(
      (data) => {
        this.habitation = data;

      },
      (error) => console.log(error)
    );
  }
  public getTransport(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.transportService.getAllTransportation().subscribe(
      (data) => {
        this.transportation = data;

      },
      (error) => console.log(error)
    );
  }
  public getRoom(): void {
    this.employeeId = this.activateRoute.snapshot.params['id'];
    this.roomService.getAllRoomsTaskeen().subscribe(
      (data) => {
        this.room = data;

      },
      (error) => console.log(error)
    );
  }
  public onAddReseidenceTransportation(): void {


    document.getElementById('add-InsuranceDependent-form')?.click();
    this.habitationTransportService.update(this.resTransData).subscribe(
      (response: any) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')
        this.viewMode = 'tabResTrans';
        this.editEmployeeResTrans(this.employeeId)
        this.GetResidenceTransformation()

      },
      (error) => {
        Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhileaddingData'), 'error')

        console.log(error);
      }
    );
  }
  public getRoomsByHabitant(event){
    this.roomByHabitation=this.room.filter((element)=>{
      return element.taskeens.habitationId === event
    })


  }
  public deleteEmployeeResidence(id){
    Swal.fire({
      icon: 'info',
      title:  'هل انت متاكد من حذف السجل',
      confirmButtonText:  'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){

        this.habitationTransportService.delete(id).subscribe(
          (response) => {


            Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
            this.GetResidenceTransformation();
            this.viewMode = "tabResTrans";
          },
          (error) => {
            console.log(error);

            Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
          }
        );
      }

  
    })
  }
  public editEmployeeResTrans(employeeId){


    this.router.navigate(['employees/employee-residence-transportation',employeeId]);
   }

}
