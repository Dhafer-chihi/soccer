import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-allplayers',
  templateUrl: './allplayers.component.html',
  styleUrls: ['./allplayers.component.css']
})
export class AllplayersComponent implements OnInit {

  players : any = [] ;
  constructor(private router : Router ,private playersServices : PlayersService) { }

  ngOnInit(): void {
    this.getAllPlayers()
  }

  getAllPlayers(){
    // this.players = JSON.parse(localStorage.getItem("players")||'[]');
    this.playersServices.getAllplayers().subscribe((result)=>{
      console.log(result.players)
      this.players = result.players
    })
  }

  infoPlayer(id : number){
    this.router.navigate([`/infoplayer/${id}`])
  }

  deletePlayer(id : any){
    
    // for (let i = 0; i < this.players.length; i++) {
    //   if (this.players[i].id === id){
    //     this.players.splice(i , 1)
    //     localStorage.setItem('players' , JSON.stringify(this.players))
    //   }
    // }

    this.playersServices.deletePlayer(id).subscribe((result)=>{
      console.log(result.message)
      this.getAllPlayers()
    })
  }


  
}
