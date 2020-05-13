import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'
import { DatachangeService } from '../datachange.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  data
  buttonsgrp = []
  buttons = []
  index= -1
  clicked=false
  Orderlist = []
   total = 0 
   displaydetails = []
  constructor(private router : Router , private datachange : DatachangeService) {
    datachange.getbilldetails("",1).subscribe(message => {
      if (message) {
       
       
        let count =-1
        this.data= message.message
        this.buttons=this.data
      //  console.log(this.data)
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
     //   console.log(this.buttonsgrp )
        }
       
        
        //console.log(this.bill_details)
       // this.keys=  Object.keys(this.view[this.messages[this.messages.length-1]["text"]])
   // this. x =this.view[this.messages[this.messages.length-1]["text"]];
    
      } else {
        // clear messages when empty message received
   
       // this.messages = [];
      }
    });
   }

  ngOnInit(): void {
  }
  newmenucategory(fromWhere){

    this.router.navigate(["/NewCategory",{fromWhere:fromWhere}]);
  }

   onclick(id){
      let  data = this.buttons[id]
      let details = this.buttons[id].Details
      let buttonsgrp = []
     // console.log(details)
        this.clicked=true
        let count =-1
       let index=-1
       
    
        buttonsgrp[0] = []
        for(let i=0 ; i<details.length ;i++){
            
            if(i%3==0){
              index++
              count++
              buttonsgrp[index] = []
              buttonsgrp[index][count] = {"data":details[i],"id":i}
            }else{
              count++
           buttonsgrp[index][count] = {"data":details[i],"id":i}
            }
            if(count==2){
              count=-1
            }
  
        }
        this.displaydetails = buttonsgrp
     //   console.log(buttonsgrp )

   }
   

   add(details){
  //   console.log(details)
  let index = this.Orderlist.indexOf(details)
  if(this.Orderlist.indexOf(details)>-1){
 
  //  this.Orderlist[index].qty = 0 
    this.Orderlist[index].qty = this.Orderlist[index].qty +1 
   
  }else{
    details.qty =1;
    this.Orderlist.push(details)
 
  }
    
  this.total +=parseInt(this.Orderlist[this.Orderlist.indexOf(details)].data[1])
    // console.log(this.total) 
   }
   delete(details){
      //  console.log(details)
        let index =  this.Orderlist[this.Orderlist.indexOf(details)]
        this.total= this.total - details.data[1]
        if(details.qty>1){
          
          details.qty= details.qty-1;
          this.Orderlist[index]=details
        }else{
          for (let order of this.Orderlist) {
            if ( order.qty=== 1) {
                this.Orderlist.splice(this.Orderlist.indexOf(order), 1);
                break;
            }
        }
      }
      
    //  console.log(this.Orderlist)
     // console.log("total=",this.total)
    
   }
   addorder(tableid,data){
    let  info = {"table_id":tableid,"data":data,"total":this.total}
      this.datachange.newOrder(info)
     // console.log(info)
   }


}
