import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppointmentsComponent } from './dashboard-appointments.component';

describe('DashboardAppointmentsComponent', () => {
  let component: DashboardAppointmentsComponent;
  let fixture: ComponentFixture<DashboardAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
