import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : string = "World";
  
  currentDate = Date.now();
  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
  }

}
