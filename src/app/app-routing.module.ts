import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { InfomatchComponent } from './components/infomatch/infomatch.component';
import { AllplayersComponent } from './components/allplayers/allplayers.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { InfoplayerComponent } from './components/infoplayer/infoplayer.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path: 'contact' , component : ContactComponent},
  {path : 'addmatch' , component : AddmatchComponent},
  {path : 'allmatches' , component : AllmatchesComponent},
  {path : 'infomatch/:idMatch' , component : InfomatchComponent},
  {path : 'editmatch/:idMatch' , component : AddmatchComponent},
  {path : 'match' , component : MatchComponent},
  {path : 'matches' , component : MatchesComponent},


  {path : 'allplayers' , component : AllplayersComponent},
  {path : 'addplayer' , component : AddplayerComponent},
  {path : 'infoplayer/:idPlayer' , component : InfoplayerComponent},
  {path : 'editplayer/:idPlayer' , component : AddplayerComponent},


  {path : 'signup' , component : SignupComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
