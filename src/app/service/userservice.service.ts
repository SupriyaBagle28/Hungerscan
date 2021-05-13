import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getdata(): Observable<any> {
    // console.log(this.http.get("/assets/Json/Menu.json"));
    return this.http.get("/assets/Json/Usermenu.json");

  }
}
