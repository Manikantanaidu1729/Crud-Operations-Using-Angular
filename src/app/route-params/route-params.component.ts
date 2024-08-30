import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params',
  standalone: true,
  imports: [],
  templateUrl: './route-params.component.html',
  styleUrl: './route-params.component.css'
})
export class RouteParamsComponent implements OnInit{

  public routeParamId: any;
  constructor(private ar: ActivatedRoute){
  }

  ngOnInit(): void {
    // let id = (this.ar.snapshot.paramMap.get('id'));
    this.ar.paramMap.subscribe(params=>{
      let id = params.get('id');
      this.routeParamId=id;
    })
  }
}
