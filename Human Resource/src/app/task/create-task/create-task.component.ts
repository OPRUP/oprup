import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from 'src/app/employees/employee';
import { EmployeeService } from 'src/app/employees/employee.service';
import Swal from 'sweetalert2';
import { Itask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  employees;
  tasks!: Itask[];
  taskData = {
    taskId: '',
    taskDescription: '',

    dueDate: '',
    userTaskState:'Pending',
    taskReply:'',
    deleteFlag: '1',
    employee:{
      employeeId:''
    }

  };
snackBar: any;
  constructor(private taskService: TaskService, private router: Router, private translate: TranslateService,private  employeeService:EmployeeService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getEmployee();
  }
  public getEmployee(): void {
    this.employeeService.get().subscribe((response: Employee[]) => {

      this.employees = response;


    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  goTaskList(){
    this.taskService.getAllTask();
    this.router.navigate(['/operation/task/task'])
  }

  public onAddTask(): void {

    if(this.taskData.taskDescription.trim() == '' || this.taskData.taskDescription == null){
      Swal.fire('Warning', 'Task is Required', 'warning')
    }
    else{
       this.taskData.employee.employeeId=this.employees.employeeId;

       document.getElementById('add-task-form')?.click();

      

      this.taskService.addUserTask(this.taskData).subscribe(
        (response: Itask) => {

          Swal.fire(this.translate.instant('success'), this.translate.instant('Dataisadded'), 'success')

          this.goTaskList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

}

