import { Component, OnInit } from '@angular/core';
import { DatachangeService } from '../datachange.service';
import { Subscription } from 'rxjs';
import{Route,ActivatedRoute, Router} from '@angular/router'
import { Test } from '../test';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  orders 
  test :Test
  
   // subscription: Subscription;
   change = false
    id= -1 
    tables: any[] = [];
    data : any[] =[]
    click = []
    subscription: Subscription;
    constructor(private dtach : DatachangeService) {
     
      this.subscription = this.dtach.gettables(-1).subscribe(message => {
        if (message) {
         // console.log(message.message)
       
          this.data = this.data.concat(message.message)
          this.tables = this.tables.concat(message.message)
         // this.total = this.tables.length -1
     //   console.log(this.data) 
          //console.log(this.tables)
         // console.log(this.tables)
       //   this.keys=  Object.keys(this.view[this.messages[this.messages.length-1]["text"]])
      //this. x =this.view[this.messages[this.messages.length-1]["text"]];
      
        } else {
          // clear messages when empty message received
         
          this.tables = [];
          this.data = []
        }
      
      });



    for(let i = 0 ;i<this.tables.length ; i++){
      this.click[this.tables[i].id]=false 
    }
       
     }

  ngOnInit(): void {

  }
 
 changed(id){
   
   if(id!=""){
     this.change=true
     this.data = this.tables
     for (let i = 0; i < this.tables.length; i++) {
      if(this.tables[i]["id"]==id){
        this.tables = [this.tables[i]]
        break;
      }
    }
   }else{
     if(this.change){
    this.tables = this.data
    this.change = false 
     }
   }
   
  // if(id){
 // this.id = id 
 // console.log(this.id)
 // this.orders = [this._data.getOrders(this.id)]
  // }else{
  //  this.orders = this._data.getOrders(-1)
  // }
 }
 delete(id){
 // console.log(id)
  this.dtach.deletetable(id,0)
  for (let i = 0; i < this.tables.length; i++) {
    if(this.tables[i]["id"]==id){
      this.tables.splice(i, 1);
    }
  }
  
  //this._data.DeleteOrder(id)
 }//*/
  neworder(){
    if(this.tables.length===0){
    
      this.dtach.Newtable(this.tables.length);
   
    }else{
      this.dtach.Newtable((this.tables[this.tables.length-1].id)+1);
    }
    // this.dtach.Newtable(this.tables.length);
   // this.tables.push()
    //this.data.push(newdata)
    
 // console.log(this.tables)
    //this.route.navigate(["/NewOrder",{id:id}]);
   
  }


  clicked(id){
    
    
   // console.log(id)
    if(this.click[id]){
      this.click[id]= false
    }else{
      this.click[id] = true
    }
  }


}