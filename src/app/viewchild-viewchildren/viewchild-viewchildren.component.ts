import { AfterViewInit, Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild-viewchildren',
  standalone: true,
  imports: [],
  templateUrl: './viewchild-viewchildren.component.html',
  styleUrl: './viewchild-viewchildren.component.css'
})
export class ViewchildViewchildrenComponent implements AfterViewInit{

  @ViewChild("para") p: any;
  @ViewChildren("heading") h: any;

  ngAfterViewInit(): void {
    console.log(this.p);
    console.log(this.h);

    console.log(this.p.nativeElement.innerText);
    for(let item of this.h._results){
      console.log(item.nativeElement.innerHTML);
    }
  }
}
