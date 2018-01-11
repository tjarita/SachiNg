import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-appointment-detail-dialog',
  templateUrl: './appointment-detail-dialog.component.html',
  styleUrls: ['./appointment-detail-dialog.component.scss']
})
export class AppointmentDetailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppointmentDetailDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
