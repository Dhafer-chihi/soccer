import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {

  matchForm !: FormGroup
  match : any = {} ; 
  id : any ;

  title : string = "Add Match";


  constructor(private router : Router , private activetedRoute : ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.paramMap.get('idMatch');
    if (this.id !== null){
      this.title = "Edit Match"
      this.getMatchById()

    }
  
  }

  // addMatch(){
  //   let matches = JSON.parse(localStorage.getItem("matches")||'[]')

  //   matches.push(this.match)
  //   localStorage.setItem("matches" , JSON.stringify(matches))
  // }


  addEditMatch(){
    let matches = JSON.parse(localStorage.getItem("matches")||'[]');//Recuperer le tableau du localStorage


    if (this.id !== null){
      //Edit match 
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].id === Number(this.id)){
          matches[i] = this.match
          console.log(matches[i])
        }
      }
    }else{
      //Add match
      this.match.id = matches.length === 0 ? 1 : matches.at(-1).id + 1
      matches.push(this.match);//Ajouter l'element dans localStorage
    }
  
    
    localStorage.setItem('matches' , JSON.stringify(matches));//Evoyer le nouveau tableau au lacalStorage
    this.router.navigate(['/allmatches']);//Redirection vers la page all matches apres l'ajout 
    
  }

  getMatchById(){
    let matches = JSON.parse(localStorage.getItem('matches')||'[]');//Recuperer le tableau du localStorage

    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id === Number(this.id)){
        this.match = matches[i]
      }
      
    }
  }

}
