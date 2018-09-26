import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  constructor(private Data : DataService, private router :RouterModule) {
    console.log("haiii")
   }

  ngOnInit() {
console.log("oninit..")
    this.Data._send_to_rest_api(null)
    .then((response) => response.json())
    .then((responseJson) => {
            console.log(responseJson);
            alert(responseJson);
          })
          .catch((error) => {
       console.error(error);
          }); 	
           
        }
        
          
     
  countCookie(event){
    event.preventDefault()
    const target = event.target
    const count = target.querySelector('#count_id').value;
    let cookie= this.Data._send_to_rest_api(null);
    console.log(count)

    // this.countCookie = this.pubsub.subscribe('pleaseCloseSidenav').subscribe((from) => {
		// 	this.sidenavOpened = false;
		// });

		// // usage of subscribe(event: string, callback: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
		// this.openSidenavSub = this.pubsub.subscribe('pleaseOpenSidenav', (from) => {
		// 	this.sidenavOpened = true;
		// });
    
    
    // this.Data.getUserDetails(username)
  }
}
