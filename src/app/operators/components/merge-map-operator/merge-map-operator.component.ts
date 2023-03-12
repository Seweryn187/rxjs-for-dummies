import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { IPersonExternal, IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.scss']
})
export class MergeMapOperatorComponent {
  message!: string;
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
  }
  
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
