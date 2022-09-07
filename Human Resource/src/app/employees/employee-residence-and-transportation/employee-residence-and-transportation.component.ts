import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RoomsTaskeenService } from 'src/app/RoomsTaskeen/RoomsTaskeen.service';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import { TransportationService } from 'src/app/Transportation/Transportation.service';
import Swal from 'sweetalert2';
import { Employee } from '../employee';

import { EmployeeService } from '../employee.service';
import { EmployeeResidenceAndTransportationService } from '../EmployeeResidenceAndTransportation.service';

@Component({
  selector: 'app-employee-residence-and-transportation',
  templateUrl: './employee-residence-and-transportation.component.html',
  styleUrls: ['./employee-residence-and-transportation.component.scss'],
})
export class EmployeeResidenceAndTransportationComponent implements OnInit {
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

  form: FormGroup = new FormGroup({
    shift: new FormControl(''),
    transportationMeanId: new FormControl(''),
    habitationId: new FormControl(''),
    roomId: new FormControl(''),
  });


  resTransData = {
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
  constructor(
    private employeeService: EmployeeService,
    private habitationTransportService: EmployeeResidenceAndTransportationService ,
    public fb: FormBuilder, // Form Builder service for Reactive forms
    private taskeenService: TaskeenService,
    private roomService: RoomsTaskeenService,
    private transportService:TransportationService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public translate: TranslateService,
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


  submitted = false;
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onAddReseidenceTransportation(): void {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.habitationTransportService.add(this.resTransData).subscribe(
      (response: any) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

        this.viewMode = 'tabResTrans';
        this.GetResidenceTransformation()
        this.resTransData = {
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
      },
      (error) => {
        Swal.fire(
          'Error!! ',
          'Error while adding Insurance Dependent',
          'error'
        );
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
 

    this.router.navigate(['employees/edit-employee-residence-transportation',employeeId]);
   }
}
