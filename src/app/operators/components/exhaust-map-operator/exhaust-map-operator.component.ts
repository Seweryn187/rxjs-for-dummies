import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, debounceTime, tap, distinctUntilChanged, takeUntil, combineLatest, of, exhaustMap, delay, interval } from 'rxjs';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrls: ['./exhaust-map-operator.component.scss']
})
export class ExhaustMapOperatorComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  listOfUsers: IPerson[] = [];

  destroy$: Subject<void> = new Subject()

  codeExample = ``;

  constructor(private mockRequestService: MockRequestsService) {}

  ngOnInit(): void {
    this.listOfUsers.push({ name: 'Adam', age: 30});
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    });
  }

  submitForm() {
    of(this.form.value).pipe(
      exhaustMap( (value) => {
        return of(value).pipe(delay(5000));
      }),
      takeUntil(this.destroy$)
    ).subscribe( (value) =>
      this.listOfUsers.push({name: value.name, age: value.age})
    );
    
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
