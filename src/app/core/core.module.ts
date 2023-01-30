import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NavbarDropdownComponent } from './navbar-dropdown/navbar-dropdown.component';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OperatorsOptionsComponent } from './operators-options/operators-options.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavbarDropdownComponent,
    OperatorsOptionsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzDropDownModule,
    NzGridModule,
    RouterModule
  ],
  exports: [
    MainPageComponent,
    RouterModule
  ]
})
export class CoreModule { }
