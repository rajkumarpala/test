import { Component, OnInit ,ContentChild, ElementRef, AfterContentInit,ContentChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-cchild',
  templateUrl: './cchild.component.html',
  styleUrls: ['./cchild.component.scss']
})
export class CchildComponent implements OnInit,AfterContentInit {

  @ContentChild("headtag")headref:ElementRef
  @ContentChildren("headtag")headrefchildren:QueryList<any>

  constructor() { }

  ngOnInit(): void {

    
  }
 ngAfterContentInit(){
  console.log(this.headref)
  //this.headref.nativeElement.setAttribute('style','color:red')
  console.log(this.headrefchildren)
  this.headrefchildren.first.nativeElement.setAttribute('style','color:red')
  this.headrefchildren.last.nativeElement.setAttribute('style','color:green')
 }
}
