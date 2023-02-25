import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorComponent } from './of-operator.component';

describe('OfOperatorComponent', () => {
  let component: OfOperatorComponent;
  let fixture: ComponentFixture<OfOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
