import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleTimeOperatorComponent } from './throttle-time-operator.component';

describe('ThrottleTimeOperatorComponent', () => {
  let component: ThrottleTimeOperatorComponent;
  let fixture: ComponentFixture<ThrottleTimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrottleTimeOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrottleTimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
