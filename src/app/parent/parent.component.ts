import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  salesProducts=[
    {id:1,name:"iphone",price:2000,},
    {id:2,name:"android",price:1000},
    { id:3,name:"windows",price:500}
  ]
  Topproducts=[
    {id:1,name:"laptop",price:60000,},
    {id:2,name:"tv",price:4000},
    { id:3,name:"mobiles",price:60000}
  ]

  data:string;
  username:string="rajkumarpala"
 @ViewChild('child')childview:ChildComponent

  constructor() { }

  ngOnInit(): void {
  }
  getData(value){
 this.data=value;
  }

  inc(){
    this.childview.increment();
  }
  dec(){
    this.childview.decrement();
  }

}
