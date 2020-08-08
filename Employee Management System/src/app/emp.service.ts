import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Employees } from './employees';
@Injectable({ providedIn: 'root' })
export class EmpService {
private url= '.api/employees';

httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};

  constructor(private http:HttpClient) { }

 getAll():Observable<Employees[]> {
   return this.http.get<Employees[]>(this.url);

 }

 getDetails(id:number):Observable<Employees>{
  const detailurl=`${this.url}/${id}`;
   return this.http.get<Employees>(detailurl);
   

   
 }
 deleteEmp(id:number):Observable<void>{
   const deleteurl=`${this.url}/${id}`;
   return this.http.delete<void>(deleteurl);

 }

 addEmp(emp:Employees):Observable<Employees>{
  
   return this.http.post<Employees>(this.url,emp);
 }

 Update(emp:Employees):Observable<Employees>{
  
   return this.http.put<Employees>(this.url,emp);

 }

 


}