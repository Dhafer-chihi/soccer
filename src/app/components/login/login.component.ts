import { Component, OnInit } from '@angular/core';
import { FormGroup,} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {}
  loginForm !: FormGroup
  constructor(private userService : UsersService) {
    
   }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.userService.login(this.user).subscribe((result)=>{
      console.log(result.message , result.user);
      sessionStorage.setItem('connectedUser' , result.user)
    })
    
  }

}
