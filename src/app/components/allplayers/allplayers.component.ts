import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allplayers',
  templateUrl: './allplayers.component.html',
  styleUrls: ['./allplayers.component.css']
})
export class AllplayersComponent implements OnInit {

  players : any = [] ;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.players = JSON.parse(localStorage.getItem("players")||'[]');
  }

  infoPlayer(id : number){
    this.router.navigate([`/infoplayer/${id}`])
  }

  deletePlayer(id : any){
    
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id){
        this.players.splice(i , 1)
        localStorage.setItem('players' , JSON.stringify(this.players))
      }
    }
  }
}
