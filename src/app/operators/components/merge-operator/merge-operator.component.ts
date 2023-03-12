import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.scss']
})
export class MergeOperatorComponent {
  message!: string;

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
