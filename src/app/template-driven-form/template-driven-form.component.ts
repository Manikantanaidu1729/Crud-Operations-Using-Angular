import { Component } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  userModal = new User("","","","","",0);

  Submit(form:any){
    console.log(form);
  }

  show(form:any,group:any,un:any){

    console.log(un);

    form.setValue({
      "":{
        Uname:"mani",
        email:"mkncse172@gmail.com",
        pwd:"mkncse17",
        cpwd:"mkncse17",
        gen:"male",
        phone:9440336738
      }
    })

    form.control.patchValue({
      "":{
        phone:9381498272
      }
    })

    group.control.patchValue({
      Uname:"manikanta",
      email:"mjaggurothu@gmail.com",
    })

    un.control.setValue("Manikanta Naidu");
    un.control.patchValue("ManikantaNaidu");
  }
}
