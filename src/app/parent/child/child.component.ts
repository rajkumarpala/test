import { AfterContentInit, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit,Input,Output, EventEmitter, ViewChild,ContentChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,AfterViewInit,AfterContentInit {

  @ContentChild("head")header:ElementRef;
  @ContentChildren("head")headerlist:QueryList<any>;
  @ViewChild("highlight")marker:ElementRef;
  @ViewChildren("multihighlight")multi:QueryList<any>;

  @Input()
  uname:string;
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  @Input()products=[];


  counter:number=0;
  

  constructor() {
    
    
   }
  
  ngOnInit(): void {
    
  }
  ngAfterContentInit(){
    console.log(this.header)
    // this.header.nativeElement.setAttribute('style','color:red')
    console.log(this.headerlist)
   }


 ngAfterViewInit() {
  // console.log(this.marker)
  this.marker.nativeElement.style.color = "red";
  // console.log(this.multi)
  this.multi.first.nativeElement.style.color = "green";
  this.multi.last.nativeElement.style.color = "Yellow"
  
  
 }


  sendData(){
    this.notify.emit("this is coming from child")
  }

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
 

}
