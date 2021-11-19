import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/users';


@Injectable({
  providedIn: 'root'
})
export class AddDetailService {

url: string = "https://jsonplaceholder.typicode.com/users";

contactList: User[] = [];



  constructor(
    private httpClient: HttpClient
  ) { }

  getContacts(): Observable<any>{
    return this.httpClient.get<User[]>(this.url);
  }


  getContactById(id: any): Observable<any>{
    return this.httpClient.get<User[]>(this.url);
  }

  addContact(user: any): Observable<any>{
    return this.httpClient.post<User[]>(this.url, user);
  }

  updateContact(user: any): Observable<any>{
    return this.httpClient.put<User[]>(this.url, user);
  }
    
  deleteContacts(id: number): Observable<any>{
    return this.httpClient.delete<User[]>(this.url);
  }
}
    
