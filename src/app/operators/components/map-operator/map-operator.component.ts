import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil, combineLatest, map } from 'rxjs';
import { IPerson, IPersonExternal } from '../../data/table-data';
import { MockRequestsService } from '../../services/mock-requests.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit, OnDestroy {
  nameFilterControler: FormControl = new FormControl('');
  peopleFromExternalSource$: Observable<IPersonExternal> = new Observable<IPersonExternal>;
  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `this.peopleFromExternalSource$.pipe(
    takeUntil(this.destroy$),
    map( (external) => {
      return {
        name: external.surname,
        age: Number(external.age)
      } as IPerson
    })
  ).subscribe( (person) => {
    this.tableData.push(person);
  });`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges;

    this.peopleFromExternalSource$ = this.mockRequestService.getPeopleFromExternalSource();
    
    this.peopleFromExternalSource$.pipe(
      takeUntil(this.destroy$),
      map( (external) => {
        return {
          name: external.surname,
          age: Number(external.age)
        } as IPerson
      })
    ).subscribe( (person) => {
      this.tableData.push(person);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
