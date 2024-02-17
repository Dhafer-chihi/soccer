import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match : any;
  @Output() newEvent : EventEmitter<any> = new EventEmitter()
  @Output() txt : string = "test"

  
  constructor() { }

  ngOnInit(): void {
  }

  passId(){
    
    console.log('here into chiled')
    
    console.log(this.match._id)
    this.newEvent.emit(this.match._id)
  }

}
