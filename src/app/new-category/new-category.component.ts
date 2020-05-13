import { Component, OnInit } from '@angular/core';
import { DatachangeService } from '../datachange.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
  error  = false
  Clicked = false
  fromwhere
  constructor(private dataservice : DatachangeService ,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=>{
      let id = params.get('fromWhere');
    
       this.fromwhere = JSON.parse(id);
     //  console.log(this.fromwhere)
   });
  }
    addcategory(name , details ,fromwhere){
      if(this.fromwhere==0){
        console.log(this.fromwhere + "addcategory")
      let detail 
      this.Clicked = true
      detail = details.value.split(",")
      if(name.value=="" || details.value==""){
         
        this.error = true 
      }else{
        this.error = false
        //service + server
        //console.log(detail)
            this.dataservice.AddBillCategory(name.value,detail,this.fromwhere);
      }


    }else{
      if(this.fromwhere==1){
      
        let detail 
        this.Clicked = true
        detail = details.value.split(",")
        for(let i = 0 ; i<detail.length ; i++ ){
        //  console.log(detail.length)
          detail[i] = detail[i].split(":")
        //  console.log(detail[i])
        }
        if(name.value=="" || details.value==""){
           
          this.error = true 
        }else{
          this.error = false
          //service + server
          //console.log(detail)
        //  console.log(this.fromwhere + "addcategory")
              this.dataservice.AddBillCategory(name.value,detail,this.fromwhere);
        }
      }

    }

    }
    
    

}
