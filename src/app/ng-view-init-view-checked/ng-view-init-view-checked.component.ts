import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-ng-view-init-view-checked',
  standalone: true,
  imports: [],
  templateUrl: './ng-view-init-view-checked.component.html',
  styleUrl: './ng-view-init-view-checked.component.css'
})
export class NgViewInitViewCheckedComponent implements AfterViewInit,AfterViewChecked,OnInit{

  @ViewChild('h') heading:any;

  Counter:number=0;
  Update(){
    this.Counter+=1;
  }

  ngOnInit(): void {
    console.log("OnInit called");
    console.log(this.heading);
  }

  ngAfterViewInit(): void {
    console.log("View Init called");
    console.log(this.heading);
  }

  ngAfterViewChecked(): void {
    console.log("child ngAfterViewChecked called");
  }
}
