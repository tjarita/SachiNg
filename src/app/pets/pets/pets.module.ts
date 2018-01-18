import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetProfileComponent } from 'app/pets/pet-profile/pet-profile.component';
import { SharedModule } from 'app/shared/shared.module';
import { VaccinationManagerComponent } from 'app/pets/modals/vaccinations/vaccination-manager/vaccination-manager.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PetProfileComponent,
    VaccinationManagerComponent
  ],
  entryComponents: [
    VaccinationManagerComponent
  ],
})
export class PetsModule { }
