import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppointmentDetailDialogComponent } from 'app/appointments/appointment-detail-dialog/appointment-detail-dialog.component';
import { PetProfileComponent } from 'app/pets/pet-profile/pet-profile.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAppointmentForm() {
    let appointmentDetailDialog = this.dialog.open(AppointmentDetailDialogComponent, {
      width: '550px'
    });

  }

  openPetForm(){
    let petDetailDialog = this.dialog.open(PetProfileComponent, {
      width: '550px'
    });
  }
}
