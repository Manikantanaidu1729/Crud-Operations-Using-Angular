import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { FormsModule } from '@angular/forms';
import { SendingMobile } from '../sending-mobile';

@Component({
  selector: 'app-crud-operations',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crud-operations.component.html',
  styleUrl: './crud-operations.component.css'
})
export class CrudOperationsComponent implements OnInit{

  constructor(private ms: MobileService){}

  sendMobile = new SendingMobile(null,null,null,null,null);

  RetrievedMobiles:any;


  formHeader:string | undefined;
  showForm:boolean | undefined;

  openForm(data:any){
    this.showForm=true;
    if (data) {
      this.sendMobile.name= data.name;
      this.sendMobile.price=data.price;
      this.sendMobile.ram=data.ram;
      this.sendMobile.storage=data.storage;
      this.sendMobile.id= data.id;
      this.formHeader="Edit Mobile";
    }
    else{
      this.sendMobile.name= null;
      this.sendMobile.price=null;
      this.sendMobile.ram=null;
      this.sendMobile.storage=null;
      this.sendMobile.id=null;
      this.formHeader="Add Mobile"
    }
  }

  saveMobile(){
    this.showForm = false;

    if (this.sendMobile.id) {
      this.ms.putMobile(this.sendMobile).subscribe((response)=>{
        this.getMobiles();
      });
    } else {
      this.ms.postMobile(this.sendMobile).subscribe((response)=>{
        this.getMobiles();
      });
    }
    
  }

  closeForm(){
    this.showForm=false;
  }

  ngOnInit(): void {
    this.getMobiles();
    console.log(this.getMobiles())
  }

  getMobiles(){
    this.ms.fetchMobiles().subscribe(data=>{
      this.RetrievedMobiles=data;
    });
  }

  deleteMobile(id:any){
    this.ms.deleteMobile(id).subscribe(response=>{
      this.getMobiles();
    })
  }

}
