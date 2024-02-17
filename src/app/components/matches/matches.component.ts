import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches : any = [];
  constructor(private matchServices : MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches();
  }


  getAllMatches(){
    // this.matches = JSON.parse(localStorage.getItem("matches")||'[]')
    // console.log(this.matches)

    this.matchServices.getAllMatches().subscribe((result)=>{
      console.log(result.matches)
      this.matches = result.matches
    })

  }


  deleteMatch(id : any){
    console.log('here into parent')

    this.matchServices.deleteMatch(id).subscribe((result)=>{
      console.log(result.message)
      this.getAllMatches()
    })
  }
}
