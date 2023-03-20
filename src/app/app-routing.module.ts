import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@app/components/page-not-found/page-not-found.component';
import { HomeComponent } from '@app/components/home/home.component';
import { CatchErrorOperatorComponent } from '@operators/components/catch-error-operator/catch-error-operator.component';
import { CombineLatestOperatorComponent } from '@operators/components/combine-latest-operator/combine-latest-operator.component';
import { DebounceTimeOperatorComponent } from '@operators/components/debounce-time-operator/debounce-time-operator.component';
import { DistinctUntilChangedOperatorComponent } from '@operators/components/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { FilterOperatorComponent } from '@operators/components/filter-operator/filter-operator.component';
import { ForkJoinOperatorComponent } from '@operators/components/fork-join-operator/fork-join-operator.component';
import { MapOperatorComponent } from '@operators/components/map-operator/map-operator.component';
import { MergeMapOperatorComponent } from '@operators/components/merge-map-operator/merge-map-operator.component';
import { SwitchMapOperatorComponent } from '@operators/components/switch-map-operator/switch-map-operator.component';
import { TakeUntilOperatorComponent } from '@operators/components/take-until-operator/take-until-operator.component';
import { WithLatestFromOperatorComponent } from '@operators/components/with-latest-from-operator/with-latest-from-operator.component';
import { MergeOperatorComponent } from '@operators/components/merge-operator/merge-operator.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'operators/catch-error', component: CatchErrorOperatorComponent},
  { path: 'operators/combine-latest', component: CombineLatestOperatorComponent},
  { path: 'operators/debounce-time', component: DebounceTimeOperatorComponent},
  { path: 'operators/distinct-until-changed', component: DistinctUntilChangedOperatorComponent},
  { path: 'operators/filter', component: FilterOperatorComponent},
  { path: 'operators/fork-join', component: ForkJoinOperatorComponent},
  { path: 'operators/map', component: MapOperatorComponent},
  { path: 'operators/merge-map', component: MergeMapOperatorComponent},
  { path: 'operators/merge', component: MergeOperatorComponent},
  { path: 'operators/switch-map', component: SwitchMapOperatorComponent},
  { path: 'operators/take-until', component: TakeUntilOperatorComponent},
  { path: 'operators/with-latest-from', component: WithLatestFromOperatorComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
