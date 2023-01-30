import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsOptionsComponent } from './operators-options.component';

describe('OperatorsOptionsComponent', () => {
  let component: OperatorsOptionsComponent;
  let fixture: ComponentFixture<OperatorsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
