import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProjectEmdadat } from 'src/app/project-emdadat/project-emdadat';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  displayedColumns = [
    'projectName',
    'projectValue',
    'clientName',
    'projectDuration',
    'ManagerName',
    'employeeNumber',
    // 'projectDescription',

  ];
  // employees!: Employee[];
  userId=5;
  ProjectEmdadats!: MatTableDataSource<ProjectEmdadat>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(  private router: Router,private activateRoute: ActivatedRoute,private service:ContractsService, private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  ngOnInit(): void {
    this.getContracts();
  }

  filterData($event: any){
    this.ProjectEmdadats.filter = $event.target.value;

}

  public getContracts():void{
     //this.userId = this.activateRoute.snapshot.params['id'];
    this.service.getContracts().subscribe(
      (response:any) => {
        this.ProjectEmdadats = new MatTableDataSource(response);
      this.ProjectEmdadats.paginator =this.paginator;
      this.ProjectEmdadats.sort = this.matSort;
  
      },
    )
  }


}
