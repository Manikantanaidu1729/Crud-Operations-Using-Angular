import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent implements OnInit {

  constructor(private r: Router){}

  routeParams = [
    {
      "id":1,"name":"Angular"
    },
    {
      "id":2,"name":"Node"
    },
    {
      "id":3,"name":"MongoDB"
    },
    {
      "id":4,"name":"Ruby"
    },
    {
      "id":5,"name":"Bootstrap"
    }
  ]

  ngOnInit(): void {
    
  }


  navigate(){
    this.r.navigate(["hello"]) // navigate(["path",routeParameters])
  }

  onSelect(routeParam:any){
    this.r.navigate(["routeParams",routeParam.id])
  }

}
