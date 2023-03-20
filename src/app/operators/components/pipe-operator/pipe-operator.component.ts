import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { Observable, Subject, debounceTime, tap, distinctUntilChanged, takeUntil, combineLatest } from 'rxjs';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.scss']
})
export class PipeOperatorComponent implements OnInit, OnDestroy {

  nameFilterControler: FormControl = new FormControl('');
  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `const nameFilter$ = this.nameFilterControler.valueChanges.pipe(
    debounceTime(1000), 
    tap( (element) => this.diffrentFilterName = 'Filter name is the same as before'),
    distinctUntilChanged()
  );`;

  diffrentFilterName!: string;

  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges.pipe(
      debounceTime(1000), 
      tap( (element) => this.diffrentFilterName = 'Filter name is the same as before'),
      distinctUntilChanged()
    );

    this.people$ = this.mockRequestService.getPeopleArray();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })

    combineLatest([nameFilter$, this.people$])
      .pipe(takeUntil(this.destroy$))
      .subscribe( ([nameFilter,  people]) => {
        this.diffrentFilterName = 'I send new filter name to server';
        this.tableData = people.filter(( { name}) => name.toLowerCase().includes(nameFilter));
    });  
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
