import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { validPassword } from 'src/app/shared/matched';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup 
  user : any = {}
  constructor(private fb : FormBuilder , private userService : UsersService) { 

    this.signupForm = this.fb.group({
      firstname : ['' , [Validators.minLength(3) , Validators.required] ],
      lastname : [''  , [Validators.maxLength(5) , Validators.required] ],
      email : ['' , [Validators.email , Validators.required]],
      password : ['' , Validators.required],
      confirmpassword : ['' , Validators.required],
      role : [window.location.pathname === "/adminSignup" ? 'admin' : 'user' ]
    },{validator : validPassword('password' , 'confirmpassword')})
  }

  ngOnInit(): void {
    console.log(window.location)
    
  }

  // addUser(){
  //   let users = JSON.parse(localStorage.getItem("users")||'[]')
  //   users.push(this.user)
  //   localStorage.setItem("users" , JSON.stringify("users"))
  //   console.log(users)
  // }


  signup(){
    console.log(this.signupForm.value)
    this.userService.signUp(this.signupForm.value).subscribe((result)=>{
      console.log(result.message)
      alert('User adedd with success')
      this.signupForm.reset()
    })

  }

}
