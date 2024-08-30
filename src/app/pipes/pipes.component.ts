import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,CustomPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name="angular";
  course=['ANGULAR','react'];

  salary=67000;

  person={
    name:"Mani",
    gender:'M',
    age:22,
    salary:50000,
    dob:new Date()
  }

  dob= new Date();

  num=0.98;

  company='google';


  wish="Hello good morning";
}
