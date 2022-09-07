import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ProjectEmdadat } from '../project-emdadat';
import { ProjectEmdadateService } from '../project-emdadate.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  // styleUrls: ['./project-delete.component.scss']
})
export class ProjectDeleteComponent implements OnInit {
  projectId!: number;
  project;
  projects!: ProjectEmdadat[];

  constructor(private projectEmdadatService: ProjectEmdadateService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit() {
    this.getProject();
  }
  goDepartmentList(){
    this.router.navigate(['/operation/project-emdadat/project-view'])
  }
  public getProject(){
    this.projectId = this.activateRoute.snapshot.params['id'];
    this.projectEmdadatService.getProjectById(this.projectId)
    .subscribe(data => {

      this.project = data;
    }, error => console.log(error));
  }
  public onDeleteProject(projectId): void{
    this.projectEmdadatService.deleteProject(this.project).subscribe( data => {
    
      Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
      this.goDepartmentList();
    },
    (error: HttpErrorResponse) =>{
      alert(error.message);
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
    }
    );
  }
  // public getAllProject(): void {
  //   this.projectEmdadatService.getAllProject().subscribe(
  //     (response: ProjectEmdadat[]) => {
  //       this.projects = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

}
