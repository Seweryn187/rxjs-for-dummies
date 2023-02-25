import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorPageComponent } from './components/operator-page/operator-page.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';


@NgModule({
  declarations: [
    OperatorPageComponent,
    OfOperatorComponent
  ],
  imports: [
    CommonModule,
    NzCollapseModule
  ]
})
export class OperatorsModule { }
