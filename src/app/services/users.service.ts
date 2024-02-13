import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUserUrl : any = 'http://localhost:3000/users'

  constructor(private http : HttpClient ) {}//variables privées

  signUp(data : any){
    return this.http.post<{message : any}>(this.apiUserUrl , data)
  }


  login(data : any){
    return this.http.post<{message : any}>(this.apiUserUrl , data)
  }





 
}
