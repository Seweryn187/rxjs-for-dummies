import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { Observable, Subject, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from-operator',
  templateUrl: './with-latest-from-operator.component.html',
  styleUrls: ['./with-latest-from-operator.component.scss']
})
export class WithLatestFromOperatorComponent implements OnInit, OnDestroy {
  nameFilterControler: FormControl = new FormControl('');
  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `nameFilter$.pipe(
    takeUntil(this.destroy$),
    withLatestFrom(this.people$)
    ).subscribe( ([nameFilter, people]) => {
    this.tableData = people.filter(  ({name}) => name.toLowerCase().includes(nameFilter));
  });`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges;

    this.people$ = this.mockRequestService.getPeopleArray();

    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })
    
    nameFilter$.pipe(
      takeUntil(this.destroy$),
      withLatestFrom(this.people$)
      ).subscribe( ([nameFilter, people]) => {
      this.tableData = people.filter(  ({name}) => name.toLowerCase().includes(nameFilter));
    });
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
