import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Serverconnect} from './serverconnect'
import { Test } from './test';
//import * as Rx from "rxjs/Rx";
import { from, Observable, throwError,Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatachangeService {
  constructor(private http : HttpClient) { }
  private subject = new Subject<any>();
  private orders = new Subject<any>() ;
  sendMessage(message: Number,data) {
   // console.log("from send msg ", data)
    this.subject.next({ text: message , data:data});
   // console.log(parseInt(this.subject[0]["text"]))
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
}
newOrder(data){
  let server : Serverconnect
  server = new Serverconnect(this.http)
  server.Senddata(7,{data:data}).subscribe((res)=>{})
  //check first if data appears after edit in orderlist

}

getOrders(orderid){
  if(orderid==-1){
 // this.orders.next({ data: this.orderlist });
  let server  : Serverconnect
  server = new Serverconnect(this.http)
  let test  :Test
 // console.log(fromwhere + "wawiiii")
 server.Senddata(8,{data:orderid}).subscribe((data:any) => {
   // console.log(data)
  test = data;
 
   this.orders.next( {message :test.data})
  // console.log(this.bill_details+" in")
});

return this.orders.asObservable();

 
}
}
DeleteOrder(orderid){
  /*for (let i = 0; i < this.orderlist.length; i++) {
    if(this.orderlist[i]["id"]==orderid){
      this.orderlist.splice(i, 1);
    }
  }

 
console.log(this.orderlist)
  */
}

Testserver(){
 let  url ="http://localhost:3000/"
  
 
return this.http.get(url).
pipe(
   map((data: Test) => {
    // console.log(data)
     return data;
   }), catchError( error => {
     return throwError( 'Something went wrong!' );
   })
)
}

AddBillCategory(name, Details,fromwhere){
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
  //console.log("addbill,datachange")
 // console.log(fromwhere + "heree")
      myserver.Senddata(0,{name:name,Details:Details,fromwhere:fromwhere}).subscribe((res)=>{})

}
bill_details =  new Subject<any>();
getbilldetails(bill_name,fromwhere): Observable<any>{
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
  let test  :Test
 // console.log(fromwhere + "wawiiii")
 myserver.Senddata(1,{name:bill_name, fromwhere:fromwhere}).subscribe((data:any) => {
   // console.log(data)
  test = data;
 
   this.bill_details.next( {message :test.data})
   //console.log(this.bill_details+" in")
});
return this.bill_details.asObservable();

 
}
Newtable(id){
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
 // console.log("addbill,datachange")
 //console.log("adding new table")
 // console.log(fromwhere + "heree")
 
   
 myserver.Senddata(2,{id:id,Status:"empty",ReservationDate:"",ReservationTime:""}).subscribe((res)=>{})
let test : Test
let message = {id:id,Status:"empty",ReservationDate:"",ReservationTime:""}
this.tables.next({message : message})

}
tables =  new Subject<any>();
gettables(id): Observable<any>{
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
  let test  :Test
 // console.log(fromwhere + "wawiiii")
 myserver.Senddata(3,{id:id}).subscribe((data:any) => {
   // console.log(data)
  test = data;

   this.tables.next( {message :test.data})
  
});
return this.tables.asObservable();

 
}
deletetable(id,fromwhere){
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
  let test  :Test
 // console.log(fromwhere + "wawiiii")
 myserver.Senddata(4,{id:id , fromwhere:fromwhere}).subscribe((res)=>{})

 
}
notes =  new Subject<any>();
getnotes(){
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
  let test  :Test
 // console.log(fromwhere + "wawiiii")
 myserver.Senddata(5,{}).subscribe((data:any) => {
  // console.log(data)
 test = data;

  this.notes.next( {message :test.data})
 
});
return this.notes.asObservable();


}
Newnote(data,priority){
  let myserver : Serverconnect
  myserver = new Serverconnect(this.http);
 // console.log("addbill,datachange")
 //console.log("adding new table")
 // console.log(fromwhere + "heree")
 
   
 myserver.Senddata(6,{data:data,priority:priority}).subscribe((res)=>{})
let test : Test
let message = {data,priority}
this.notes.next({message : message})

}


}
