import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-heroes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './manage-heroes.component.html',
  styleUrl: './manage-heroes.component.css'
})
export class ManageHeroesComponent {

  constructor(private r: Router){

  }

  heroes2(){
    this.r.navigate(["manageheroes/heroes2"]);   // in navigate method we have to give full path for nested routing but not that like this ["heroes2"]
  }
}
