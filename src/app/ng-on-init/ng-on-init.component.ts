import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.css'
})
export class NgOnInitComponent implements OnInit{

  @Input() received_data:string | undefined;

  ngOnInit(): void {
    console.log("In Onit: "+this.received_data);
  }

  constructor(){
    console.log("In constructor: "+this.received_data);
  }
}
