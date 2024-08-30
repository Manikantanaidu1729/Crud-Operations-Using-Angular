import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {

}
