import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Itask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-print-task',
  templateUrl: './print-task.component.html',
  styleUrls: ['./print-task.component.scss']
})
export class PrintTaskComponent implements OnInit {
  displayedColumns: string[] = [

    'taskDescription',
    'Employee',
    'dueDate',
    'userTaskState',

  ];
  tasks!: MatTableDataSource<Itask>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
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

    this.taskService.getAllTask().subscribe((response:Itask[]) => {
      this.tasks = new MatTableDataSource(response);
    
      this.tasks.paginator =this.paginator;
      this.tasks.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }


  ngAfterViewInit() {}
  public onEditTaskById(taskId: number): void {
    this.router.navigate(['/operation/task/edit-task', taskId])
  }

  printPage() {

    window.print();
  }


  filterData($event: any){
    this.tasks.filter = $event.target.value;
  }

}
