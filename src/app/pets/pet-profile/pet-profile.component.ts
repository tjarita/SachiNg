import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {
  petProfilePicture: any = "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/21433552_1869233413391830_728847824053075968_n.jpg";
  constructor() { }

  ngOnInit() {
  }

}
