import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';

import { ContentStyleComponent } from './components/layouts/content-style/content-style.component';
import { FullContentComponent } from './components/layouts/full-content/full-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';

import { FeatherModule } from 'angular-feather';
import { Home, Layers, Box, 	Edit, PieChart, Zap, Map, Grid, Droplet, ShoppingCart, Layout, Users, HelpCircle, File, Cpu, Sliders } from 'angular-feather/icons';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ErrorStyleComponent } from './components/layouts/error-style/error-style.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { HoriFullLayoutComponent } from './components/hori-full-layout/hori-full-layout.component';
import { HoriHeaderComponent } from './components-horizontal/hori-header/hori-header.component';
import { HoriMenuComponent } from './components-horizontal/hori-menu/hori-menu.component';
import { HoriSwitcherComponent } from './components-horizontal/hori-switcher/hori-switcher.component';
import { MaterialIconsComponent } from '../components/icons/material-icons/material-icons.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { OperationFullContentComponent } from './components/layouts/operation-full-content/operation-full-content.component';
import { OperationSidebarComponent } from './components/operation-sidebar/operation-sidebar.component';
import { SalesSidebarComponent } from './components/sales-sidebar/sales-sidebar.component';
import { SalesFullContentComponent } from './components/layouts/sales-full-content/sales-full-content.component';
import { PurchaseFullContentComponent } from './components/layouts/purchase-full-content/purchase-full-content.component';
import { PurchaseSidebarComponent } from './components/purchase-sidebar/purchase-sidebar.component';
import { AccountsFullContentComponent } from './components/layouts/accounts-full-content/accounts-full-content.component';
import { AccountsSidebarComponent } from './components/accounts-sidebar/accounts-sidebar.component';
import { FinanceFullContentComponent } from './components/layouts/finance-full-content/finance-full-content.component';
import { FinanceSidebarComponent } from './components/finance-sidebar/finance-sidebar.component';
import { InternationalSidebarComponent } from './components/international-sidebar/international-sidebar.component';
import { SettingSidbarComponent } from './components/setting-sidbar/setting-sidbar.component';
import { SettingFullContentComponent } from './components/layouts/setting-full-content/setting-full-content.component';
import { InternationalFullContentComponent } from './components/layouts/international-full-content/international-full-content.component';
import { ReportFullContentComponent } from './components/layouts/report-full-content/report-full-content.component';
import { ReportSidebarComponent } from './components/report-sidebar/report-sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
// Select some icons (use an object, not an array)
const icons = {
  Home, Layers, Box, 	Edit, PieChart, Map, Grid, Zap, Droplet, ShoppingCart, Layout, Users, HelpCircle, File, Cpu, Sliders
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation:false
};

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TabToTopComponent,
    LoaderComponent,
    FullContentComponent,
    ContentStyleComponent,
    FooterComponent,
    ErrorStyleComponent,
    FullscreenDirective,
    SwitcherComponent,
    HoriFullLayoutComponent,
    HoriHeaderComponent,
    HoriMenuComponent,
    HoriSwitcherComponent,
    OperationFullContentComponent, OperationSidebarComponent,
    SalesSidebarComponent,SalesFullContentComponent,
    PurchaseFullContentComponent,PurchaseSidebarComponent,
    AccountsFullContentComponent,AccountsSidebarComponent,
    FinanceFullContentComponent,FinanceSidebarComponent,
    InternationalSidebarComponent,InternationalFullContentComponent,
    SettingSidbarComponent, SettingFullContentComponent, ReportFullContentComponent, ReportSidebarComponent,
   ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    FeatherModule.pick(icons),
    PerfectScrollbarModule,
    TranslateModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    FullContentComponent,
    FeatherModule,
    FullscreenDirective,
    TabToTopComponent,
    LoaderComponent,
    HoriFullLayoutComponent,
    TranslateModule,
    OperationFullContentComponent,OperationSidebarComponent,
    SalesFullContentComponent, SalesSidebarComponent,
    PurchaseFullContentComponent, PurchaseSidebarComponent,
    AccountsFullContentComponent, AccountsSidebarComponent,
    FinanceFullContentComponent, FinanceSidebarComponent,

    InternationalFullContentComponent, InternationalSidebarComponent,
    SettingFullContentComponent, SettingSidbarComponent,
    ReportFullContentComponent, ReportSidebarComponent
  ],
})
export class SharedModule { }
