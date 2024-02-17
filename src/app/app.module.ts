import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//______________________________________________________________________________//

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { AllmatchesComponent } from './components/allmatches/allmatches.component';
import { AllplayersComponent } from './components/allplayers/allplayers.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { SlideComponent } from './components/slide/slide.component';
import { InfomatchComponent } from './components/infomatch/infomatch.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { InfoplayerComponent } from './components/infoplayer/infoplayer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    MatchesComponent,
    PlayerComponent,
    AllmatchesComponent,
    AllplayersComponent,
    AddmatchComponent,
    AddplayerComponent,
    SlideComponent,
    InfomatchComponent,
    SignupComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    MyFilterPipe,
    ReplacePipe,
    InfoplayerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
