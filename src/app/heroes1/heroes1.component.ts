import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes1.component.html',
  styleUrl: './heroes1.component.css'
})
export class Heroes1Component {

  obj : object = {
    about: "allu arjun was on April 8th 1982 in a telugu family to film producer allu aravind and nirmala in madras.",
    contact:"visit geetha arts office 1067, road no.45, jubilee hills, masthan nagar, naddagiri hills, hyderabad, telangana 500034."
  }
  
}
