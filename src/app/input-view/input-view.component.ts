import { Component, OnInit, Input } from '@angular/core';
import { DatachangeService } from '../datachange.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.css']
})
export class InputViewComponent implements OnInit {
  messages: any[] = [];
  data
  subscription: Subscription;
  constructor(private dtach : DatachangeService) {
   // console.log("hello from consructor")
  this.subscription = this.dtach.getMessage().subscribe(message => {
  
      if (message) {
      //  console.log("from constructo",message.data)
     
        this.data=message.data
        this.messages.push(message);
     //   this.keys=  Object.keys(this.view[this.messages[this.messages.length-1]["text"]])
    //this. x =this.view[this.messages[this.messages.length-1]["text"]];
    
      } else {
        // clear messages when empty message received
       // console.log("wow")
        this.messages = [];
      }
    });
     
   }

@Input() id : number ;

  

  ngOnInit(): void {
  //  this.keys=  Object.keys(this.view[this.id])
   // this. x =this.view[this.id];
    
    
    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
    this.dtach.clearMessages();
  }
}

