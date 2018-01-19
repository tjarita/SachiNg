import 'hammerjs';
import { CovalentHttpModule } from '@covalent/http';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';
import { APPOINTMENT_DIALOGS, AppointmentsModule } from 'app/appointments/appointments.module';
import { PetsModule } from 'app/pets/pets/pets.module';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CovalentHttpModule.forRoot(),
    AppointmentsModule, PetsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    APPOINTMENT_DIALOGS
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AppModule { }
