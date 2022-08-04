import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[myColorDir]',
  exportAs: 'colory'
})
export class MyColorDirDirective {
  
  private counter = 0;

  @HostBinding('class') myClass: string;
  @HostBinding('style') myStyle: string;
  @HostListener('click', ['$event']) changeColor(){
    this.setRandomColor();
  };

  setRandomColor(){
    this.myStyle = 'color: #' + Math.floor(Math.random() * 12345678).toString(16);
    console.log(this.counter++);
  };

  constructor() {
    this.myClass = 'second-class';
    this.myStyle = '';
    setTimeout(() => {
      this.myClass = 'first-class'
      this.myStyle = 'background-color: blue;';
    }, 2000);
   }

}
