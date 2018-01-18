import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationManagerComponent } from './vaccination-manager.component';

describe('VaccinationManagerComponent', () => {
  let component: VaccinationManagerComponent;
  let fixture: ComponentFixture<VaccinationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
