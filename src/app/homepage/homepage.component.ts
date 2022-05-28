import { ProviderService } from './../provider.service';
import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnChanges {
  list:any = [];
  @Input() searchStr = ''; 

  constructor(private service: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.userInformation();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('javascript==>search',this.searchStr);
    if(this.searchStr){
      var condition = new RegExp(this.searchStr.toLowerCase());

    this.list=this.list.filter((item:any)=>{
      return condition.test(item.Name.toLowerCase());
     })
      console.log("filter",this.list)
     }
    else{
      this.userInformation();
    }
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
