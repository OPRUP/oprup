import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';


const USER_INFO = [
  {id: 1, "name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
  {id: 2, "name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
  {id: 3, "name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
  {id: 4, "name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
];

const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "dateOfBirth": "date",
  "age": "number",
  "isEdit": "isEdit"
}



@Component({
  selector: 'app-working-times',
  templateUrl: './working-times.component.html',
  styleUrls: ['./working-times.component.scss']
})
export class WorkingTimesComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
   }

  displayedColumns: string[] = ['name', 'occupation', 'dateOfBirth', 'age', 'isEdit'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;


  // constructor(public dialog: MatDialog) {}

  addRow() {
    const newRow = {id: Math.floor(Math.random() * 1000), "name": "", "occupation": "", "dateOfBirth": "", "age": 0, isEdit: true}
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id) {
    this.dataSource = this.dataSource.filter(u => u.id !== id);
  }
  ngOnInit() {
  }

}


