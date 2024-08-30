import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-changes.component.html',
  styleUrl: './ng-on-changes.component.css'
})
export class NgOnChangesComponent implements OnChanges{

  @Input() receiving_data:string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("currentValue: " +changes['receiving_data'].currentValue);
    console.log("previousValue: "+changes['receiving_data'].previousValue)
  }
}
