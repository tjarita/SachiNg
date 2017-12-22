import 'hammerjs';
import { CovalentHttpModule } from '@covalent/http';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';
import { APPOINTMENT_DIALOGS, AppointmentsModule } from 'app/appointments/appointments.module';
import { PetsModule } from 'app/pets/pets/pets.module';

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

  providers: [],
})
export class AppModule { }
