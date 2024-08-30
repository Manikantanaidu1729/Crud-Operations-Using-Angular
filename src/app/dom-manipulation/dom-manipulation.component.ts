import { Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  standalone: true,
  imports: [],
  templateUrl: './dom-manipulation.component.html',
  styleUrl: './dom-manipulation.component.css'
})
export class DomManipulationComponent implements AfterViewInit{

  @ViewChild("header") head:any;
  @ViewChild("input") inp:any;

  ngAfterViewInit(): void{
    this.head.nativeElement.innerText="Changed Header";
    console.log(this.head);
    this.inp.nativeElement.onkeyup= ()=>{
      console.log(this.inp.nativeElement.value);
    }
  }
}