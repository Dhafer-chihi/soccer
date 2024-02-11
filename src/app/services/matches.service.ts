import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {


  apiMatchUrl : any = 'http://localhost:3000/matches'

  constructor(private http : HttpClient) { }


  addMatch(match : any){
    return this.http.post<{message : any}>(this.apiMatchUrl , match);
  }


  getAllMatches(){
    return this.http.get<{matches : any}>(this.apiMatchUrl)
  }


  getMatchById(id : any){
    return this.http.get<{match : any}>(`${this.apiMatchUrl}/${id}`)
  }

  deleteMatch(id : any){
    return this.http.delete<{message : any}>(`${this.apiMatchUrl}/${id}`)
  }
  
  updateMatch(match : any){
    return this.http.patch<{message : any}>(this.apiMatchUrl , match)
  }



}
