import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  url = "http://localhost:5000/mobiles";

  constructor(private http: HttpClient) { }

  fetchMobiles(){
    return this.http.get(this.url);
  }

  postMobile(sendMobile:any){
    return this.http.post(this.url,sendMobile);
  }

  putMobile(sendMobile:any){
    return this.http.put(this.url,sendMobile);
  }

  deleteMobile(id:any){
    return this.http.delete(this.url+ "/"+ id);
  }
}
