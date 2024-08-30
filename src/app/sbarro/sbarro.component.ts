import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sbarro',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sbarro.component.html',
  styleUrl: './sbarro.component.css'
})
export class SbarroComponent implements OnDestroy{

  destroy:boolean=true;

  ngOnDestroy(): void {
    this.destroy=false;
  }
  
}
