import { AppointmentFormComponent } from './appointments/appointment-form/appointment-form.component';
import { CovalentHttpModule } from '@covalent/http';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';

import 'hammerjs';
import { APPOINTMENT_DIALOGS, AppointmentsModule } from 'app/appointments/appointments.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CovalentHttpModule.forRoot(),
    AppointmentsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    APPOINTMENT_DIALOGS
  ],

  providers: [],
})
export class AppModule { }
