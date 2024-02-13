import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  apiplayerUrl : any = 'http://localhost:3000/players'

  constructor(private http : HttpClient) { }

  addPlayer(player : any){
    return this.http.post<{message : any}>(this.apiplayerUrl , player)
  }

  getAllplayers(){
    return this.http.get<{players : any}>(this.apiplayerUrl)
  }

  getplayerById(id : any){
    return this.http.get<{player : any}>(this.apiplayerUrl , id)
  }

  deletePlayer(id : any){
    return this.http.delete<{message : any}>(`${this.apiplayerUrl}/${id}`)
  }
  

  editPlayer(id : any){
    return this.http.patch<{message : any}>(this.apiplayerUrl , id)
  }
}
