import { Component, OnInit } from '@angular/core';
import { DatachangeService } from '../datachange.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
data : any[]=[] ;
notes : any[]= []
priority_value
  constructor(private dch : DatachangeService ) { 
          dch.getnotes().subscribe((message)=>{
            if(message){
           //   console.log(message.message)
       
              this.data = this.data.concat(message.message)
              this.notes = this.notes.concat(message.message)
             // this.total = this.tables.length -1
          //  console.log("from here ", this.data) 
            }
          })
  }

  ngOnInit(): void {
  }
  addnote(data){
   // console.log(data)
  this.dch.Newnote(data,this.priority_value)
  }
  
  priority(value){
   // console.log(value)
   this.priority_value = value
  }
  delete(note){
   // console.log("delete", note)
    for (let i = 0; i < this.notes.length; i++) {
      if(this.notes[i]["data"]==note.data && this.notes[i]["priority"]==note.priority){
        this.notes.splice(i, 1);
      }
  }
  }

}
