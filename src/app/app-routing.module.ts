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
import { LoginComponent } from './components/login/login.component';
import { AddtemComponent } from './components/addtem/addtem.component';
import { AllteamsComponent } from './components/allteams/allteams.component';

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

  {path : 'addteam' , component : AddtemComponent},
  {path : 'allteams' , component : AllteamsComponent},

  {path : 'userSignup' , component : SignupComponent},
  {path : 'adminSignup' , component : SignupComponent},


  {path : 'login' , component : LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
