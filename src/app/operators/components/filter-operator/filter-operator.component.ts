import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit, OnDestroy{
  
  nameFilterControler: FormControl = new FormControl('');
  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `combineLatest([nameFilter$, this.people$])
    .subscribe( ([nameFilter,  people]) => {
      this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
    });`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges;

    this.people$ = this.mockRequestService.getPeopleOf();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })

    // combineLatest([nameFilter$, this.people$])
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     filter(([nameFilter, people]) => 
    //     {
    //       return people.filter( ({name}) => name.toLowerCase().includes(nameFilter))
    //     })
    //   )
    //   .subscribe( ([nameFilter,  person]) => {
    //     console.log(nameFilter);
    //     console.log(person);
    //     this.tableData.push(person);
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
