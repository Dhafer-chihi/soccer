import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addtem',
  templateUrl: './addtem.component.html',
  styleUrls: ['./addtem.component.css']
})
export class AddtemComponent implements OnInit {
  teamForm !: FormGroup
  title = "Add Team";
  team : any = {};
  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
  }

  addTeam(){
    // console.log('team : ', this.team);
    
    this.teamService.addTeam(this.team).subscribe((result)=>{
      console.log(result.message)
    })
   
  }
  
}
