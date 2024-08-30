import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-service.component.html',
  styleUrl: './http-service.component.css'
})
export class HttpServiceComponent {

  constructor(private http: HttpClient){}

  data:any;


  getData(){
    this.http.get("https://fakestoreapi.com/products?limits=5").subscribe((data)=>{
      this.data=data;
    });
  }

}
