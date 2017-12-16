import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule, CovalentDataTableModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatMenuModule, MatTooltipModule, MatSlideToggleModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSnackBarModule, MatSidenavModule, MatTabsModule, MatSelectModule, MatGridListModule } from '@angular/material';

const ANGULAR_MODULES: any[] = [
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatMenuModule, MatTooltipModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule,
  MatTabsModule, MatSelectModule, MatGridListModule
];

const COVALENT_MODULES: any[] = [
  CovalentLayoutModule, CovalentStepsModule,
  CovalentExpansionPanelModule, CovalentDataTableModule
];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES
  ],
  exports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES]
})
export class SharedModule { }
