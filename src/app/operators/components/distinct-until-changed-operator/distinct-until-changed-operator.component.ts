import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, debounceTime, takeUntil, combineLatest, distinctUntilChanged, tap } from 'rxjs';
import { IPerson } from '../../data/table-data';
import { MockRequestsService } from '../../services/mock-requests.service';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.scss']
})
export class DistinctUntilChangedOperatorComponent {

  nameFilterControler: FormControl = new FormControl('');
  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = ``;

  diffrentFilterName!: string;


  constructor(private mockRequestService: MockRequestsService) {

    const nameFilter$ = this.nameFilterControler.valueChanges.pipe(
      debounceTime(1000), 
      tap( (element) => this.diffrentFilterName = 'Filter name is the same as before'),
      distinctUntilChanged()
    );

    this.people$ = this.mockRequestService.getPeople();
    
    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    })

    combineLatest([nameFilter$, this.people$])
      .pipe(
        takeUntil(this.destroy$),
      )
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
