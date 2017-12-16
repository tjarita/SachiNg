import { CovalentHttpModule } from '@covalent/http';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CovalentHttpModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
