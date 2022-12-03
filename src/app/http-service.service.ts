import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) {
   }

   getEmployeesList() : Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  getEmployeeById(id:number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  // createEmployee(employee : any): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`,employee);
  // }

  }

