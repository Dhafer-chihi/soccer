import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !: FormGroup 
  user : any = {}
  constructor(private fb : FormBuilder) { 

    this.signupForm = this.fb.group({
      firstname : ['' , [Validators.minLength(3) , Validators.required] ],
      lastname : [''  , Validators.required ],
      email : ['' , [Validators.email , Validators.required]],
      password : ['' , Validators.required],
      confirmpassword : ['' , Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  // addUser(){
  //   let users = JSON.parse(localStorage.getItem("users")||'[]')
  //   users.push(this.user)
  //   localStorage.setItem("users" , JSON.stringify("users"))
  //   console.log(users)
  // }


  signup(){
    console.log(this.signupForm.value)
  }
}
