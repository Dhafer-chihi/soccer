import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  palyerForm !: FormGroup;
  player : any = {};


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addPlayer(){
    let players = JSON.parse(localStorage.getItem('players')||'[]');
    // let id = players.length === 0 ? 1 : players.at(-1).id +1
    // --------------------------if  else-------------------- 




    // if (players.length === 0){
    //   id = 1
    // }else{
    //   id = players.at(-1).id +1
    // }
    this.player.id = players.length === 0 ? 1 : players.at(-1).id +1
    players.push(this.player)
    localStorage.setItem('players' , JSON.stringify(players));

    this.router.navigate(['/allplayers'])


  }
  
}
