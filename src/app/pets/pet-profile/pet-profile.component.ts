import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VaccinationManagerComponent } from 'app/pets/modals/vaccinations/vaccination-manager/vaccination-manager.component';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  petName: string;
  petSpecies: string;
  petNote: string;


  ngOnInit() {

  }

  openVaccinationManager() {
    let dialogRef = this.dialog.open(VaccinationManagerComponent, {

    });
  }

}
