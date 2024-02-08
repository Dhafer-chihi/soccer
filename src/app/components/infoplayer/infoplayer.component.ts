import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infoplayer',
  templateUrl: './infoplayer.component.html',
  styleUrls: ['./infoplayer.component.css']
})
export class InfoplayerComponent implements OnInit {

  id : any;
  player : any = {};
  constructor(private activatedRoute : ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('idPlayer');
   }

  ngOnInit(): void {
    this.getplayerById()
  }


  getplayerById(){
    let players = JSON.parse(localStorage.getItem("players")||'[]');

    for (let i = 0; i < players.length; i++) {
      if (players[i].id === Number(this.id)){
        this.player = players[i]
      }
      
    }
  }

}
