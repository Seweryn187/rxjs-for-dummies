import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OperatorsOptionsComponent } from './components/operators-options/operators-options.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';

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
