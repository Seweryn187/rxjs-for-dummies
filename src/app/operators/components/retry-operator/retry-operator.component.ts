import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit, OnDestroy {

  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = ``;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {

    this.people$ = this.mockRequestService.getPeopleArray();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
