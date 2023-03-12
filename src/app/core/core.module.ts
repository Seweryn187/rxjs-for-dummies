import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NavbarDropdownComponent } from '@app/components/navbar-dropdown/navbar-dropdown.component';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OperatorsOptionsComponent } from '@app/components/operators-options/operators-options.component';
import { MainPageComponent } from '@app/components/main-page/main-page.component';
import { ChangeSpacebarToDividerPipe } from '@app/pipes/change-spacebar-to-divider.pipe';
import { PageNotFoundComponent } from '@app/components/page-not-found/page-not-found.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    MainPageComponent,
    NavbarDropdownComponent,
    OperatorsOptionsComponent,
    ChangeSpacebarToDividerPipe,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzDropDownModule,
    NzGridModule,
    RouterModule,
    NzButtonModule
  ],
  exports: [
    MainPageComponent,
    RouterModule
  ]
})
export class CoreModule { }
