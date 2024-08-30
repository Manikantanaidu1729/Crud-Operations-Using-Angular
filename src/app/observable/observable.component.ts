import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  obs1 = new Observable((listener)=>{
    listener.next("Hello");
    listener.next("Good Morning");
    listener.next("Manikanta Naidu");
    setInterval(()=>{
      listener.next(143);
    },1000);
    listener.error("Error generated");
  });

  obs2 = new Observable((listener)=>{
    listener.next("Hello");
    listener.next("Good Morning");
    listener.next("Manikanta Naidu");
    setInterval(()=>{
      listener.next(143);
    },1000);
  });

  sub1(){
    this.obs1.subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("complete");
      }
    }
    )
  }

  subref:any;

  sub2(){
    this.subref = this.obs2.subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("complete");
      }
    }
    )
  }

  unsub(){
    this.subref.unsubscribe();
  }
}