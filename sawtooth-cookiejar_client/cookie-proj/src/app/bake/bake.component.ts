import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bake',
  templateUrl: './bake.component.html',
  styleUrls: ['./bake.component.scss']
})
export class BakeComponent implements OnInit {

  constructor(private Data : DataService,
             private router :RouterModule) { }

  ngOnInit() {
  }
  bakeCookie(event){
   
    event.preventDefault()
    const target = event.target
    const bakevalue = target.querySelector('#bake_id').value;
    this.Data.wrap_and_send("bake", [bakevalue]);//.subscribe({});
    console.log(bakevalue)
    
    // this.Data.getUserDetails(username)
  }

}
