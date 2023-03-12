import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil, forkJoin } from 'rxjs';
import { IAddress, IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrls: ['./fork-join-operator.component.scss']
})
export class ForkJoinOperatorComponent implements OnInit, OnDestroy {

  nameFilterControler: FormControl = new FormControl('');

  people$: Observable<IPerson[]> = new Observable<IPerson[]>;

  addresses$: Observable<IAddress[]> = new Observable<IAddress[]>;

  tableData: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = `forkJoin([this.people$, this.addresses$]).pipe(takeUntil(this.destroy$))
  .subscribe(([people, addresses]) => {
    const peopleWithAddresses = people.map( (person, index) =>  {
      return {...person, address: addresses[index]}
    });
    this.tableData = peopleWithAddresses;
  });`;


  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    const nameFilter$ = this.nameFilterControler.valueChanges;

    this.people$ = this.mockRequestService.getPeopleOf();

    this.addresses$ = this.mockRequestService.getAddresses();
    

    forkJoin([this.people$, this.addresses$]).pipe(takeUntil(this.destroy$))
    .subscribe(([people, addresses]) => {
      const peopleWithAddresses = people.map( (person, index) =>  {
        return {...person, address: addresses[index]}
      });
      this.tableData = peopleWithAddresses;
    });


  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
  
}
