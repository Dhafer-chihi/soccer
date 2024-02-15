import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-infomatch',
  templateUrl: './infomatch.component.html',
  styleUrls: ['./infomatch.component.css']
})
export class InfomatchComponent implements OnInit {

  
  id : any;
  match : any = {};
  
  
  constructor(private activatedRoute : ActivatedRoute , private matchService : MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('idMatch');//Recupérer id de l'element
    this.getMatchById()
    console.log(this.match)

  }

 getMatchById(){
  // let matches = JSON.parse(localStorage.getItem("matches")||'[]');//Recupérer la liste des elements 

  // for (let i = 0; i < matches.length; i++) {
  //   if (matches[i].id === Number(this.id))
  //   {
  //    this.match = matches[i]
  //   }
  //   console.log(matches[i])
  // }

  this.matchService.getMatchById(this.id).subscribe((result)=>{
    console.log(result.match)
    this.match = result.match
  })
  
 }

 compare(a:any , b:any){

  if (Number(a)>Number(b)) {
    return ['Win' , 'green']
  }else if(Number(a)<Number(b)){
    return ['Loss' , 'yellow']
  }else{
    return ['Draw' , 'purple']
  }
 }

}
