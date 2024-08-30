import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input-decorator-p-to-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-decorator-p-to-c.component.html',
  styleUrl: './input-decorator-p-to-c.component.css'
})
export class InputDecoratorPToCComponent {

  @Input() passed_property:string | undefined;

  @Input() passed_array:Array<any> | undefined;
}
