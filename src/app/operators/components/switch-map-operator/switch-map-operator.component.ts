import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPerson, IPersonDetails } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.scss']
})
export class SwitchMapOperatorComponent implements OnInit, OnDestroy  {
  
  codeExample = `public getPersonDetail(id: number): Observable<IPersonDetails> {
    return of(PEOPLE_DETAILS).pipe(
      delay(3000),
      map( (details) => details[id]),
      switchMap( (person) => {
        return of(person);
      })
    );
  }`;

  tableData: IPerson[] = [];
  chosenPersonDetails!: IPersonDetails;

  people$: Observable<IPerson[]> = new Observable<IPerson[]>;
  personId$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  personDetails$: Observable<IPersonDetails> = new Observable<IPersonDetails>;
  destroy$: Subject<void> = new Subject()

  constructor(private mockRequestService: MockRequestsService){}

  ngOnInit(): void {
    this.people$ = this.mockRequestService.getPeopleArray();

    this.people$.pipe(takeUntil(this.destroy$)).subscribe( (people) => {
      this.tableData = people;
    });
    
    this.personId$.subscribe( id => {
      this.personDetails$ = this.mockRequestService.getPersonDetail(id);
    });

  }


  public choosePerson(id: number) {
    this.personId$.next(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  
}
