import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SbarroComponent } from '../sbarro/sbarro.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,RouterModule,SbarroComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
