import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches : any = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllMatches();
  }


  getAllMatches(){
    this.matches = JSON.parse(localStorage.getItem("matches")||'[]')
    console.log(this.matches)

  }
}
