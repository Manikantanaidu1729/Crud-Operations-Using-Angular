import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent implements OnInit{

  constructor(private http:HttpClient){}

  users:any;

  users2:any

  ngOnInit(): void {
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
      this.users2 = data;
    })

    this.users = this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
