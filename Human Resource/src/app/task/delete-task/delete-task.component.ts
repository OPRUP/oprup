import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Itask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  taskId!: number;
  task!: Itask;
  tasks!: Itask[];



  constructor(private taskService: TaskService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getTask();
  }

  public getTask(){
    this.taskId = this.activateRoute.snapshot.params['id'];
    this.taskService.getByTaskId(this.taskId)
    .subscribe(data => {

      this.task = data;
    }, error => console.log(error));
  }


  public onDeleteTask(task: Itask){
    this.taskService.deleteUserTask(task).subscribe( data => {

      Swal.fire('Success', 'Task is Deleted', 'success')
      this.goTaskList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire('Error!! ', 'Error while delete Task', 'error')
    }
    );
  }

  public getAllTasks(): void {
    this.taskService.getAllTask().subscribe(
      (response: Itask[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  goTaskList(){
    this.router.navigate(['/task/task'])
  }


}

