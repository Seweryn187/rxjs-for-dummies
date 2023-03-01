import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorPageComponent } from './components/operator-page/operator-page.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { OfOperatorComponent } from './components/of-operator/of-operator.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { CombineLatestOperatorComponent } from './components/combine-latest-operator/combine-latest-operator.component';
import { SwitchMapOperatorComponent } from './components/switch-map-operator/switch-map-operator.component';
import { MergeMapOperatorComponent } from './components/merge-map-operator/merge-map-operator.component';
import { TakeUntilOperatorComponent } from './components/take-until-operator/take-until-operator.component';
import { DebounceTimeOperatorComponent } from './components/debounce-time-operator/debounce-time-operator.component';
import { DistinctUntilChangedOperatorComponent } from './components/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { ForkJoinOperatorComponent } from './components/fork-join-operator/fork-join-operator.component';
import { MergeOperatorComponent } from './components/merge-operator/merge-operator.component';
import { CatchErrorOperatorComponent } from './components/catch-error-operator/catch-error-operator.component';
import { ExhaustMapOperatorComponent } from './components/exhaust-map-operator/exhaust-map-operator.component';
import { WithLatestFromOperatorComponent } from './components/with-latest-from-operator/with-latest-from-operator.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    OperatorPageComponent,
    OfOperatorComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    CombineLatestOperatorComponent,
    SwitchMapOperatorComponent,
    MergeMapOperatorComponent,
    TakeUntilOperatorComponent,
    DebounceTimeOperatorComponent,
    DistinctUntilChangedOperatorComponent,
    ForkJoinOperatorComponent,
    MergeOperatorComponent,
    CatchErrorOperatorComponent,
    ExhaustMapOperatorComponent,
    WithLatestFromOperatorComponent,
  ],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzButtonModule,
    NzNotificationModule,
    QuillModule
  ]
})
export class OperatorsModule { }
