import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ANGULAR_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule
];

const MATERIAL_MODULES: any[] = [];

const COVALENT_MODULES: any[] = [
  CovalentLayoutModule,
  CovalentStepsModule
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
