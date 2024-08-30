import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ng-destroy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ng-destroy.component.html',
  styleUrl: './ng-destroy.component.css'
})
export class NgDestroyComponent implements OnDestroy{

  ngOnDestroy(): void {
    console.log("Component exits");
  }
}
