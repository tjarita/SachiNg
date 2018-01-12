import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule, CovalentDataTableModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatMenuModule, MatTooltipModule, MatSlideToggleModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSnackBarModule, MatSidenavModule, MatTabsModule, MatSelectModule, MatGridListModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http/src/module';

const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
  BrowserAnimationsModule, BrowserModule,
  FormsModule, ReactiveFormsModule,
  MatDialogModule, HttpClientModule
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatMenuModule, MatTooltipModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule,
  MatTabsModule, MatSelectModule, MatGridListModule,
  MatProgressBarModule
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
    MATERIAL_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  exports: [
    ANGULAR_MODULES,
    COVALENT_MODULES,
    MATERIAL_MODULES,
    FLEX_LAYOUT_MODULES,
  ]
})
export class SharedModule { }
