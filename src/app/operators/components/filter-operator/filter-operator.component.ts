import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, filter, forkJoin, Observable, Subject, takeUntil } from 'rxjs';
import { IPerson, Positions } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit, OnDestroy{
  
  positions: typeof Positions = Positions;
  chosenPositionControler: FormControl = new FormControl(this.positions.EMPLOYEE);
  people$: Observable<IPerson> = new Observable<IPerson>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `combineLatest([nameFilter$, this.people$])
    .subscribe( ([nameFilter,  people]) => {
      this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
    });`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const chosenPosition$ = this.chosenPositionControler.valueChanges;

    this.people$ = this.mockRequestService.getPeopleSeparately();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (person) => {
      this.tableData.push(person);
    })

    // forkJoin([chosenPosition$, this.people$])
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     filter(([chosenPosition, people]) => {
          
    //     })
    //   )
    //   .subscribe( ([chosenPosition,  people]) => {
    //     console.log(people);
    //     this.tableData = people;
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
