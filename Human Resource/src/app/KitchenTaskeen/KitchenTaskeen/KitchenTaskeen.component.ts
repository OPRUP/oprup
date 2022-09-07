import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { KitchenTaskeen } from '../KitchenTaskeen';
import { KitchenTaskeenService } from '../KitchenTaskeen.service';

@Component({
  selector: 'app-KitchenTaskeen',
  templateUrl: './KitchenTaskeen.component.html',
  styleUrls: ['./KitchenTaskeen.component.scss']
})
export class KitchenTaskeenComponent implements OnInit {
  displayedColumns = [
    'habitationName',
    'kitchenCode',
    'gascylinders',
    'gasStoves',
    'tools',
    'description',
    'actions',

  ];
  taskeens;
  kitchensTaskeen!: MatTableDataSource<KitchenTaskeen>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private kitchenTaskeenService: KitchenTaskeenService,
    private router: Router, private translate: TranslateService) {
      this.translate.setDefaultLang('ar');
      const lang = localStorage.getItem('lang')  || 'ar';
      this.translate.use(lang);
      document.documentElement.lang = lang;
    }

  ngOnInit() {
    this.getAllKitchenRooms();
  }
  public getAllKitchenRooms(): void {

    this.kitchenTaskeenService.getAllKitchenRoom().subscribe((response:KitchenTaskeen[]) => {
      this.kitchensTaskeen = new MatTableDataSource(response);
      this.kitchensTaskeen.paginator =this.paginator;
      this.kitchensTaskeen.sort = this.matSort;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );

  }
  ngAfterViewInit() {}
  filterData($event: any){
    this.kitchensTaskeen.filter = $event.target.value;

}
public onEditKitchensTaskeenById(kitchenId: number): void {
  this.router.navigate(['/operation/KitchenTaskeen/KitchenTaskeen_edit', kitchenId])
}

  public onEditToDeleteKitchenIdById(kitchenId: number):void{
    this.router.navigate(['/operation/KitchenTaskeen/KitchenTaskeen_delete', kitchenId])
  }


}
