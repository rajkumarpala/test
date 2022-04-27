import { QueryList } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBluebackground]'
})
export class BluebackgroundDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.backgroundColor="blue"
    
   }

}
