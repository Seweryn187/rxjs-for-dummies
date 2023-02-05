import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { OperatorPageComponent } from './operators/components/operator-page/operator-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'operators/:operator', component: OperatorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
