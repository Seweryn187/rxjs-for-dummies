import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil, combineLatest, debounceTime } from 'rxjs';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-debounce-time-operator',
  templateUrl: './debounce-time-operator.component.html',
  styleUrls: ['./debounce-time-operator.component.scss']
})
export class DebounceTimeOperatorComponent implements OnInit, OnDestroy {
  
  nameFilterControler: FormControl = new FormControl('');
  nameFilterControlerDB: FormControl = new FormControl('');
  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `const nameFilterWithDB$ = this.nameFilterControlerDB.valueChanges.pipe(debounceTime(1000));
  combineLatest([nameFilterWithDB$, this.people$])
    .pipe(takeUntil(this.destroy$))
    .subscribe( ([nameFilter,  people]) => {
      this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
  });`;


  constructor(private mockRequestService: MockRequestsService) {}
  
  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges;
    const nameFilterWithDB$ = this.nameFilterControlerDB.valueChanges.pipe(debounceTime(1000));

    this.people$ = this.mockRequestService.getPeopleOf();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })

    combineLatest([nameFilter$, this.people$])
      .pipe(takeUntil(this.destroy$))
      .subscribe( ([nameFilter,  people]) => {
        this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
    });

    combineLatest([nameFilterWithDB$, this.people$])
      .pipe(takeUntil(this.destroy$))
      .subscribe( ([nameFilter,  people]) => {
        this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
    });
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
