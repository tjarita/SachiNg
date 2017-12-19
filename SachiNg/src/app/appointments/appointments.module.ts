import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AppointmentFormComponent } from 'app/appointments/appointment-form/appointment-form.component';
import { AppointmentComponents } from 'app/appointments/appointment-components.component';
import { AppointmentTableComponent } from 'app/appointments/appointment-table/appointment-table.component';
import { AppointmentDetailDialogComponent } from './appointment-detail-dialog/appointment-detail-dialog.component';

export const APPOINTMENT_DIALOGS: any = [
  AppointmentDetailDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AppointmentDetailDialogComponent,
  ],
  exports: [
    AppointmentDetailDialogComponent,
  ]
})
export class AppointmentsModule { }
