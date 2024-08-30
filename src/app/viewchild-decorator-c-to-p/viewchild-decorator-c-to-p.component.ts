import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-decorator-c-to-p',
  standalone: true,
  imports: [],
  templateUrl: './viewchild-decorator-c-to-p.component.html',
  styleUrl: './viewchild-decorator-c-to-p.component.css'
})
export class ViewchildDecoratorCToPComponent {

  data = "demo of view child";

  passtoParent(){
    return this.data;
  }
}
