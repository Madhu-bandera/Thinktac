import { ProviderService } from './../provider.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() list:any;
@Input() newItemEvent = new EventEmitter<any>();



  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    console.log('list in header',this.list);
    this.getAllData()
  }

  getAllData(){
    this.service.getData().subscribe((res:any)=>{
      this.list = res
      console.log(res);
    })
  }
}

