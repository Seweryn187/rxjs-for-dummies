import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { IPerson } from '../../data/table-data';
import { MockRequestsService } from '../../services/mock-requests.service';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.scss']
})
export class CombineLatestOperatorComponent implements OnInit, OnDestroy {

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

    this.people$ = this.mockRequestService.getPeople();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })

    combineLatest([nameFilter$, this.people$])
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
