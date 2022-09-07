import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Taskeen } from 'src/app/Taskeen/Taskeen';
import { TaskeenService } from 'src/app/Taskeen/Taskeen.service';
import Swal from 'sweetalert2';
import { KitchenTaskeen } from '../KitchenTaskeen';
import { KitchenTaskeenService } from '../KitchenTaskeen.service';

@Component({
  selector: 'app-KitchenTaskeen_print',
  templateUrl: './KitchenTaskeen_print.component.html',
  styleUrls: ['./KitchenTaskeen_print.component.scss']
})
export class KitchenTaskeen_printComponent implements OnInit {
  displayedColumns: string[] = [
    'kitchenCode',
    'habitationName',
    'gascylinders',
    'gasStoves',
    'description',
    'tools',
  ]
  taskeens?:Taskeen[];
  kitchensTaskeen!: MatTableDataSource<KitchenTaskeen>;

  constructor(private kitchenTaskeenService: KitchenTaskeenService,
    private taskeenService:TaskeenService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getAllKitchenTaskeen();
  }
  public getAllKitchenTaskeen(): void {
    this.kitchenTaskeenService.getAllKitchenRoom().subscribe(
      (response:KitchenTaskeen[]) => {
        this.kitchensTaskeen = new MatTableDataSource(response);

      /* this.projects.paginator =this.paginator;
      this.projects.sort = this.matSort; */
      },
      (error)  =>
        {
          console.log(error);
          Swal.fire('Error !', 'Error in loading data !', 'error');
        }
      );

  }
  printPage() {

    window.print();
  }

}
