import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { FormControl } from '@angular/forms';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-vaccination-manager',
  templateUrl: './vaccination-manager.component.html',
  styleUrls: ['./vaccination-manager.component.scss']
})
export class VaccinationManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vaccinationDate =  new FormControl(moment([2017, 0, 1]));

}
