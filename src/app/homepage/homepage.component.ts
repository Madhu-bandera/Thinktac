import { ProviderService } from './../provider.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  list:any = [];

  constructor(private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
    console.log('javascript')
    this.userInformation();
  }
 userInformation(){
   this.service
   .userInfo()
   .then((res) => {
     console.log('in component', res)
     this.list=res;
   })
   .catch((err) => {
   console.log('err',err);
    } );
 }
}
