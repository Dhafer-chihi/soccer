import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLogged(){
    const token = sessionStorage.getItem('connectedUser')

    if (token){
      const decoded = jwtDecode(token)
      // @ts-ignore
      console.log(decoded.user)
      
    }
    


    return !!token
  }

}
