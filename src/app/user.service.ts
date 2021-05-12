
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/users';

  private searchUrl='http://localhost:8080/springboot-crud-rest/users/getUserById';

  private searchfUrl='http://localhost:8080/springboot-crud-rest/users/getUserByFname';


  constructor(private http: HttpClient) { }

  /* getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);
  } */

   getUserById(id:number):Observable<any>{
    
    return this.http.get(`${this.searchUrl}/${id}`);
  }

  getUserByFname(firstName:string){
  
    
    return this.http.get(`${this.searchfUrl}/${firstName}`)
  }

  createUser(user: Object): Observable<Object> {
   
    
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
  
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<Object> {
    
    
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    
    
    return this.http.get(`${this.baseUrl}`);
  }
}