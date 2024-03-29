import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-allmatches',
  templateUrl: './allmatches.component.html',
  styleUrls: ['./allmatches.component.css']
})
export class AllmatchesComponent implements OnInit {

  matches : any = [];
  select : any
  parentSelector : boolean = false

  constructor(private router : Router , private matchService : MatchesService) { }

  ngOnInit(): void {
    this.getAllMatches();
  }

  getAllMatches(){
    // this.matches = JSON.parse(localStorage.getItem("matches")||'[]'); //Afficher les elements enregistrer dans localStrage
    this.matchService.getAllMatches().subscribe((result)=>{
      console.log(result.matches);
      this.matches = result.matches
    })
  }

  infoMatch(id : any){
  this.router.navigate([`/infomatch/${id}`])
  // this.router.navigate(['/infomatch/'+id])
  }
  editMatch(id : number , path : string){
    this.router.navigate([`${path}/${id}`])
  }

  deleteMatch(id : any){
    // for (let i = 0; i< this.matches.length; i++) {
    //   if (this.matches[i].id === id){
    //     this.matches.splice(i , 1);//Supprimer un element du tableau
    //     localStorage.setItem('matches' , JSON.stringify(this.matches));//Envoyer le resultat du nouveau tableau au lacalStorage
    //   }
     
    // }
    
      
    
    this.matchService.deleteMatch(id).subscribe((result)=>{
      console.log(result.message); 
      this.getAllMatches();

    })

  }

  
  onChangeSelect($event : any){
    const id = $event.target.value
    const isChecked = $event.target.checked
    console.log(id , isChecked)

    this.matches = this.matches.map((m : any)=>{
     for (let id = -1; id < this.matches.length; id++) {
      if (m.id == id){
        m.select = isChecked
        this.parentSelector = false
        return m
      }
      if(id == -1){
        m.select = this.parentSelector
        return m
      }
        return m 
      
     }
      
    })
    console.log(this.matches)
  }

}
