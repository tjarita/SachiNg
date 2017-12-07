import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatListModule, MatButtonModule, MatCardModule, MatMenuModule, MatTooltipModule, MatSlideToggleModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatSnackBarModule, MatSidenavModule, MatTabsModule, MatSelectModule, MatGridListModule } from '@angular/material';

const ANGULAR_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule
];

const MATERIAL_MODULES: any[] = [
  MatButtonModule, MatCardModule, MatIconModule,
  MatListModule, MatMenuModule, MatTooltipModule,
  MatSlideToggleModule, MatInputModule, MatCheckboxModule,
  MatToolbarModule, MatSnackBarModule, MatSidenavModule,
  MatTabsModule, MatSelectModule, MatGridListModule
];

const COVALENT_MODULES: any[] = [
  CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule
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
