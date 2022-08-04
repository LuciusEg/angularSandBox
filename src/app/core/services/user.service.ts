import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 constructor(private _http: HttpClient) { }

  private users = [
    { name: 'John'},
    { name: 'Antohn'},
    { name: 'Stepahn'},
  ];
  
  public getAllUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
    // return this.users;
  }

  public remove(name : string) {
    return this.users = this.users.filter(user => user.name !== name);
  }

  public add(name: string){
    this.users.push({ name });
  }
}
