import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})
export class NgDoCheckComponent implements DoCheck,OnChanges{

  mobiles:any=["oppo","redmi","samsung","iqoo"];

  ngDoCheck(): void {
    console.log("Child doCheck called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges called");
  }
}
