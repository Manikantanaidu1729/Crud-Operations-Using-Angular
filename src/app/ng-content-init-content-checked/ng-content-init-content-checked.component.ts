import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-init-content-checked',
  standalone: true,
  imports: [],
  templateUrl: './ng-content-init-content-checked.component.html',
  styleUrl: './ng-content-init-content-checked.component.css'
})
export class NgContentInitContentCheckedComponent implements AfterContentInit,AfterContentChecked{

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked called")
  }

}
