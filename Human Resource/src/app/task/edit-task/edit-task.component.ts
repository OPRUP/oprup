import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Itask } from '../itask';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

   //public qualification: Qualification[] = [];
   taskId!: number;
   task;
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

   goTaskList(){
    this.getAllTasks();
     this.router.navigate(['/operation/task/task'])
   }

   public getTask(){
     this.taskId = this.activateRoute.snapshot.params['id'];

     this.taskService.getByTaskId(this.taskId)
     .subscribe(data => {

       this.task = data;
     }, error => console.log(error));
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

   public onUpdateTask(task: Itask): void {
     if(task.taskDescription.trim() == '' || task.taskDescription == null){
       Swal.fire('Warning', 'Task Description is Required', 'warning')
     }
     else{
    debugger
      this.task.deleteFlag='1'

       this.taskService.updateUserTask(task).subscribe(
         (response: Itask) => {

           Swal.fire('Success', 'Task  is Updated', 'success')

           this.goTaskList();
         },
         (error: HttpErrorResponse) => {
           alert(error.message);
           Swal.fire('Error!! ', 'Error while update Task', 'error')
         }
       );
     }

   }

 }

