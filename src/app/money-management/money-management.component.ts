import { Component, OnInit } from '@angular/core';
import { DatachangeService } from '../datachange.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-money-managment',
  templateUrl: './money-management.component.html',
  styleUrls: ['./money-management.component.css']
})
export class MoneyManagementComponent implements OnInit {
 idcount = -1
 clicked=false ;
 id ;
 buttons
 buttonsgrp = []
 index = -1
  constructor( private dtach : DatachangeService , private router : Router) { 
  
      // send message to subscribers via observable subject
      this.dtach.getbilldetails("",0).subscribe(message => {
        if (message) {
       //   console.log(message )
         
          let count =-1
          this.buttons= message.message
          this.buttonsgrp[0] = []
          for(let i=0 ; i<this.buttons.length ;i++){
              
              if(i%3==0){
                this.index++
                count++
                this.buttonsgrp[this.index] = []
                this.buttonsgrp[this.index][count] = {"data":this.buttons[i],"id":i}
              }else{
                count++
              this.buttonsgrp[this.index][count] = {"data":this.buttons[i],"id":i}
              }
              if(count==2){
                count=-1
              }
           //   console.log(this.buttonsgrp)
          }
         
          
          //console.log(this.bill_details)
         // this.keys=  Object.keys(this.view[this.messages[this.messages.length-1]["text"]])
     // this. x =this.view[this.messages[this.messages.length-1]["text"]];
      
        } else {
          // clear messages when empty message received
          console.log("wow")
         // this.messages = [];
        }
      });
    

  }
 
  ngOnInit(): void {
    //  let x = dtach
   // this.route.paramMap.subscribe((params : ParamMap)=>{
      //let id = params.get('id');
     // this.id = parseInt(id);
     // if(this.id>=0){
      
      //  this.clicked=true;
      //  this.id = parseInt(id);
     //  }
 
   
  // });
  
 
  }
    onclick(id,data){
   // console.log(parseInt(id))
    //  this.router.navigate(["moneymanagment",{id:id}]);
    this.id = id
    this.clicked=true;
  //  console.log("from onclick " ,data)
    this.dtach.sendMessage(parseInt(id),data);
    //this.dtach.getbilldetails("");
   
   // console.log(this.bill_details)
      
    }
    Category(fromWhere){
      this.router.navigate(["/NewCategory",{fromWhere:fromWhere}]);
    }
}
