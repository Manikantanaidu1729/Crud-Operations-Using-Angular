import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {

  constructor(){}

  greeting = 'Hello';
  src:string= '/assets/ANSOO BLOG LOGO.png';
  isDisabled:boolean=true;
  isEnabled:boolean=false;

  name:string="";
  email:string="";

  cvar:string="green";

  hasError:boolean=true;

  submit(){
    alert("User Name: " + this.name + ", " + "Email: " + this.email);
  }

  userService = new UsersService();
}