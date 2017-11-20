import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentHttpModule } from '@covalent/http';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
