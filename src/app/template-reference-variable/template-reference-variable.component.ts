import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {

  send(inf:any){
    console.log(inf.classList);
  }
}