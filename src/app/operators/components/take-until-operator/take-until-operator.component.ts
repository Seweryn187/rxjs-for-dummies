import { Component } from '@angular/core';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  templateUrl: './take-until-operator.component.html',
  styleUrls: ['./take-until-operator.component.scss']
})
export class TakeUntilOperatorComponent {

  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  destroy$: Subject<void> = new Subject()
  tableData: IPerson[] = [];
  codeExample = `this.people$.pipe(
    takeUntil(this.destroy$)
    ).subscribe( (people) => {
    this.tableData = people;
  })`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    this.people$ = this.mockRequestService.getPeopleArray();
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
