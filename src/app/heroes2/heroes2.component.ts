import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes2.component.html',
  styleUrl: './heroes2.component.css'
})
export class Heroes2Component {

  obj : object = {
    about: "NTR was on May 25th 1980in a telugu family to film producer NTR Father and nirmala in madras.",
    contact:"visit geetha arts office 1067, road no.45, jubilee hills, masthan nagar, naddagiri hills, hyderabad, telangana 500034."
  }

}
