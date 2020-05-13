import { Component, OnInit } from '@angular/core';
import { DatachangeService } from '../datachange.service';
import { Subscription } from 'rxjs';
import{Route,ActivatedRoute, Router} from '@angular/router'
import { Test } from '../test';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders 
  test :Test
   // subscription: Subscription;
    id= -1 
    Orders: any[] = [];
    data : any[] =[]
    subscription: Subscription;
  constructor( private  _data : DatachangeService , private route : Router) { 
    this.orders = this._data.getOrders(this.id).subscribe(message=>{

      if (message) {
      //  console.log(message)
     
        this.data = this.data.concat(message.message)
        this.Orders = this.Orders.concat(message.message)
       // this.total = this.tables.length -1
     // console.log("dataaa" ,this.Orders) 
        //console.log(this.tables)
       // console.log(this.tables)
     //   this.keys=  Object.keys(this.view[this.messages[this.messages.length-1]["text"]])
    //this. x =this.view[this.messages[this.messages.length-1]["text"]];
    
      } else {
        // clear messages when empty message received
      
        this.Orders = [];
        this.data = []
      }
    
    });
    
  }

  ngOnInit(): void {
  
  }
  change = false
 changed(id){
   
   if(id!=""){
     this.change=true
     this.data = this.Orders
     for (let i = 0; i < this.Orders.length; i++) {
      if(this.Orders[i]["data"]["table_id"]==id){
        this.Orders = [this.Orders[i]]
        break;
      }
    }
   }else{
     if(this.change){
    this.Orders = this.data
    this.change = false 
     }
   }
 }
 delete(data){
   //console.log(data)
  
   this._data.deletetable(data,1)
   for (let i = 0; i < this.Orders.length; i++) {
     if(this.Orders[i]["data"]["table_id"]==data.table_id){
       this.Orders.splice(i, 1);
       this.data.splice(i, 1);
     }
   }
   
 }
 
  neworder(id){
  /*  this._data.Testserver();
    this._data
    .Testserver()
    .subscribe((data:any) => {
    
      this.test = data;
      console.log(this.test.data)
    });*/
    
    this.route.navigate(["/NewOrder",{id:id}]);
  }

}
    
 

