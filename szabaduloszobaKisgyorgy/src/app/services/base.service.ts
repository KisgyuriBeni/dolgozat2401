import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BaseService {
private url = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getData(target:string){
    return this.http.get(this.url+target)
  }
  addData(body:any){
    return this.http.post(this.url+'foglalasok',body)
  }
}
