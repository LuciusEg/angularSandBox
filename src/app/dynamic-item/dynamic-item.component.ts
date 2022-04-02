import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.scss']
})
export class DynamicItemComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef,
     private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      //  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicItemComponent);
      //  this.viewContainerRef.createComponent(componentFactory);
      // this.viewContainerRef.createComponent(DynamicItemComponent);
    },2000)
    console.log('test');
  }
}