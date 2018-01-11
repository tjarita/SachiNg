import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProfileComponent } from 'app/pets/pet-profile/pet-profile.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PetProfileComponent
  ]
})
export class PetsModule { }
