import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IPerson } from '@operators/data/table-data';
import { MockRequestsService } from '@operators/services/mock-requests.service';
import { Subject, delay, throttleTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-throttle-time-operator',
  templateUrl: './throttle-time-operator.component.html',
  styleUrls: ['./throttle-time-operator.component.scss']
})
export class ThrottleTimeOperatorComponent implements AfterViewInit, OnInit, OnDestroy{
  form!: FormGroup;
  listOfUsers: IPerson[] = [];

  @ViewChild('btn', { static: true })
  public button!: any;

  destroy$: Subject<void> = new Subject()

  codeExample = `fromEvent(this.button.elementRef.nativeElement, 'click').pipe(
    delay(1000),
    throttleTime(2000)
  ).subscribe( () => {
    const formValue = this.form.value;
    this.listOfUsers.push({id: this.listOfUsers.length, name: formValue.name, age: formValue.age});
  });`;

  constructor(private mockRequestService: MockRequestsService) {}


  ngOnInit(): void {
    this.listOfUsers.push({id: 0, name: 'Adam', age: 30});
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    });
  }

  ngAfterViewInit(): void {
    console.log(this.button);
    fromEvent(this.button.elementRef.nativeElement, 'click').pipe(
      delay(1000),
      throttleTime(2000)
    ).subscribe( () => {
      const formValue = this.form.value;
      this.listOfUsers.push({id: this.listOfUsers.length, name: formValue.name, age: formValue.age});
    });
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
