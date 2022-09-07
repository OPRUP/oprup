import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Visa } from '../visa';
import { VisaService } from '../visa.service';

@Component({
  selector: 'app-delete-visa',
  templateUrl: './delete-visa.component.html',
  styleUrls: ['./delete-visa.component.scss'],
})
export class DeleteVisaComponent implements OnInit {
  companyId!: number;
  visa!: Visa;
  visas!: Visa[];

  constructor(
    private service: VisaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ar');
    const lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }

  ngOnInit() {
    this.getCompany();
    this.getAllCompanies();
  }

  public getCompany() {
    this.companyId = this.activateRoute.snapshot.params['id'];
    this.service.getById(this.companyId).subscribe(
      (data) => {
        this.visa = data;
      },
      (error) => console.log(error)
    );
  }

  public onDeleteCentralJob(visa: Visa) {
    this.service.delete(visa).subscribe(
      (data) => {
        Swal.fire(
          this.translate.instant('success'),
          this.translate.instant('DataisDeleted'),
          'success'
        );

        this.goCompaniesList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        Swal.fire(
          this.translate.instant('Error'),
          this.translate.instant('ErrorwhiledeletingData'),
          'error'
        );
      }
    );
  }

  public getAllCompanies(): void {
    this.service.get().subscribe(
      (data: Visa[]) => {
        this.visas = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goCompaniesList() {
    this.router.navigate(['/international/visa/visa']);
  }
}
