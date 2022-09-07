import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Section } from '../section';
import { SectionService } from '../section.service';

@Component({
  selector: 'app-delete-section',
  templateUrl: './delete-section.component.html',
  styleUrls: ['./delete-section.component.scss']
})
export class DeleteSectionComponent implements OnInit {

  sectionId!: number;
  section;
  sections!: Section[];



  constructor(private sectionService: SectionService, private router: Router, private activateRoute: ActivatedRoute, private translate: TranslateService){
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang')  || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getSection();
  }

  public getSection(){
    this.sectionId = this.activateRoute.snapshot.params['id'];
    this.sectionService.getSectionById(this.sectionId).subscribe(
    (data) => {

      this.section = data;
    },
    (error) => {
      Swal.fire('Error!! ', 'Error while loading Section', 'error')
      console.log(error);
    }
    );
  }


  public onDeleteSection(section: Section){
    this.sectionService.deleteSection(section).subscribe(
       (data) => {
        Swal.fire(this.translate.instant('success'), this.translate.instant('DataisDeleted'), 'success')
  
          this.goSectionList();
    },
    (error) => {
      Swal.fire(this.translate.instant('Error'), this.translate.instant('ErrorwhiledeletingData'), 'error')
      console.log(error);
    }
    );
  }




  goSectionList(){
    this.router.navigate(['/sections/sections'])
  }


}


