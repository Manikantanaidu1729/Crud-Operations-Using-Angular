import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor() { }

  users:any=[
    {
    id:522,name:"mani",batch:2024
    },
    {
      id:523,name:"adithya",batch:2024
    },
    {
      id:508,name:"RK",batch:2024
    },
    {
      id:524,name:"Mythresh",batch:2024
    }]

    getUsers(){
      return this.users;
    }
}