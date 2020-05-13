import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from './test';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export class Serverconnect {
    constructor(private http : HttpClient) { }
     private new_bill_cat_url = "http://localhost:3000/newbillcat"
     private bill_details = "http://localhost:3000/billdetails"
     private New_table = "http://localhost:3000/newtable"
     private tables = "http://localhost:3000/gettables"
     private delete_table = "http://localhost:3000/DeleteTable"
     private get_notes = "http://localhost:3000/getnotes"
     private add_note = "http://localhost:3000/addnote"
     private add_order = "http://localhost:3000/addorder"
     private get_orders = "http://localhost:3000/getorders"
     private base = "http://localhost:3000/"
    Getdata(urlname,id){
        let url 
        switch(urlname){
            case 0:
                url = this.new_bill_cat_url;
                break;
            case 1 : 
              url = this.bill_details;
              break;
            case 2 : 
              url = this.New_table;
              break;
              case 3 : 
              url = this.tables;
              break;
              case 4 : 
                url = this.delete_table;
                break;
                case 5 : 
                url = this.get_notes;
                break;
                case 6 : 
                url = this.add_note;
                break;
                case 7 : 
                url = this.add_order;
                break;
                case 8 : 
                url = this.get_orders;
                break;
            default :
               url = this.base ;


        }
         
        
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

       

      
        Senddata(urlname ,senddata) {
            let url 
            switch(urlname){
                case 0:
                    url = this.new_bill_cat_url;
                    break;
                case 1 : 
                  url = this.bill_details;
                  break;
                  case 2 : 
                  url = this.New_table;
                  break;
                  case 3 : 
                  url = this.tables;
                  break;
                  case 4 : 
                  url = this.delete_table;
                  break;
                  case 5 : 
                  url = this.get_notes;
                  break;
                  case 6: 
                  url = this.add_note;
                  break;
                  case 7 : 
                  url = this.add_order;
                  break;
                  case 8 : 
                  url = this.get_orders;
                  break;
                default :
                   url = this.base ;
    
    
            }
         //  console.log(senddata)
            return this.http.post(url,senddata).
                pipe(
                   map((data: any) => {
                     
                     return data;
                   }), catchError( error => {
                     return throwError( 'Something went wrong!' );
                   })
                )
            }
       

}
