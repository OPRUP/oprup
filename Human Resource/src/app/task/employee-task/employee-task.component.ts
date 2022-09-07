import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Itask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.scss']
})
export class EmployeeTaskComponent implements OnInit {
task;
  displayedColumns: string[] = [

    'taskDescription',
    'dueDate',
    'userTaskState',
    'taskReply',
    'actions',
  ];
  tasks;



  constructor(private taskService: TaskService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }


  ngOnInit(): void {
    this.getAllTasks();
  }

  public getAllTasks(): void {

    this.taskService.getTaskByEmployee(1).subscribe((response:Itask[]) => {
      this.tasks = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }




  filterData($event: any){
    this.tasks.filter = $event.target.value;
  }

  onUpdateEmpTask(task: Itask): void {

   debugger


   this.taskService.updateUserTask(task).subscribe(
    (response: Itask) => {
   
      Swal.fire('Success', 'Task  is Updated', 'success')

     // this.goTaskList();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      Swal.fire('Error!! ', 'Error while update Task', 'error')
    }
  );

  }


}
