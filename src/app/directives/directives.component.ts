import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  data:string='';

  byte:string="mani";

 nums=[1,2,3];

 num1:number=4;
 num2:number=8;

 operator:string="";

 properties={color:'red',Size:'30px',Style:'italic'};
 hasError:boolean=false;
}
