import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { RequestOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  // private url:string = "";
  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    // console.log(this.http.get("/assets/Json/Menu.json"));
    return this.http.get("/assets/Json/Menu.json");

  }

  // addMenu(dishdata): Observable<any>{
   
  // }

  deleteitem(id: number): Observable<any> {
    console.log(id);
    return this.http.delete( "/assets/Json/Menu.json/id=" + id);
    
  
  }
}
