import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-decorator-c-to-p',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-decorator-c-to-p.component.html',
  styleUrl: './output-decorator-c-to-p.component.css'
})
export class OutputDecoratorCToPComponent {

  @Output() custom_event = new EventEmitter();

  message:string | undefined;

  passtoParent(){
    this.custom_event.emit(this.message);
  }
  
}
