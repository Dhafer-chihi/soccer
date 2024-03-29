import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  imagePreview = ""
  palyerForm !: FormGroup;
  player : any = {};
  teams : any = []

  constructor(private router : Router , private playersService : PlayersService , private teamService : TeamService) { }

  ngOnInit(): void {    
    this.getAllTeams()
  }

  getAllTeams(){
    this.teamService.getAllTeam().subscribe((result)=>{
      console.log('all teams' , result.teams)
      this.teams = result.teams
    })
  }

  addPlayer(){
    // let players = JSON.parse(localStorage.getItem('players')||'[]');
    // let id = players.length === 0 ? 1 : players.at(-1).id +1
    // --------------------------if  else-------------------- 




    // if (players.length === 0){
    //   id = 1
    // }else{
    //   id = players.at(-1).id +1
    // }
    // this.player.id = players.length === 0 ? 1 : players.at(-1).id +1
    // players.push(this.player)
    // localStorage.setItem('players' , JSON.stringify(players));




    this.playersService.addPlayer(this.player).subscribe((result)=>{
      console.log('player' , result.message)
    })
    
    this.router.navigate(['/allplayers'])
   
  }


  onImageSelect(event : any){
    // const file = (event.target as HTMLInputElement).files[0]
    const file = event.target.files[0]
    // console.log(file)

    const reader = new FileReader()
    reader.onload = ()=>{
      this.imagePreview = reader.result as string //convertir reader result en string  
      
    }
    reader.readAsDataURL(file)// crer un url pour afficher l'image
  }
  
}
