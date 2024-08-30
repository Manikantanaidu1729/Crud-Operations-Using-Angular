import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-ref-variable-c-to-p',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-ref-variable-c-to-p.component.html',
  styleUrl: './template-ref-variable-c-to-p.component.css'
})
export class TemplateRefVariableCToPComponent {

  child_data:string|undefined;
}
