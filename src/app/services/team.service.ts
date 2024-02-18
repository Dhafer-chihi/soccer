import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  apiTeamUrl : any = "http://localhost:3000/teams"
  constructor(private http : HttpClient) { }

  addTeam(team : any){
    return this.http.post<{message : any}>(this.apiTeamUrl , team)
  }
  getAllTeam(){
    return this.http.get<{teams : any}>(this.apiTeamUrl)
  }
  getTeamById(id : any){
    return this.http.get<{team : any}>(`${this.apiTeamUrl}/${id}`)
  }
  deleteTeam(id : any){
    return this.http.delete<{message : any}>(`${this.apiTeamUrl}/${id}`)
  }
  updateTeam(team :any){
    return this.http.patch<{message : any}>(this.apiTeamUrl , team)
  }
}
