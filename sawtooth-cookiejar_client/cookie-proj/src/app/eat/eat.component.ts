import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { DataService } from '../data.service';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     


//declare const Buffer
//var Buffer=require('').Buffer;
@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrls: ['./eat.component.scss']
})

export class EatComponent implements OnInit {

  constructor(
              private router : RouterModule, private Data : DataService ) { 

  }

  ngOnInit() {
    console.log("Inside eat component");
  }
  
      
// eatCookie(event){


//   event.preventDefault()
//   const target = event.target
//   const eatvalue = target.querySelector('#eat_id').value;
//   this.Data.wrap_and_send("eat", [eatvalue]);

 
     
        
     
//     console.log(eatvalue)
      
//     // this.Data.getUserDetails(username)
//   }
}
