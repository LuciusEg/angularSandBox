import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.scss']
})
export class DynamicItemComponent implements OnInit {

  constructor(private _viewContainerRef: ViewContainerRef,
     private _componentFactoryResolver: ComponentFactoryResolver,
     private _router: Router,
     private _routerActive: ActivatedRoute
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      //  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicItemComponent);
      //  this.viewContainerRef.createComponent(componentFactory);
      // this.viewContainerRef.createComponent(DynamicItemComponent);
    },2000)
    console.log('test');
  }

  goToUser(userId:number){
    // относительно текущего активного роута
    this._router.navigate(['user', userId], {skipLocationChange : true, relativeTo: this._routerActive});
    // не изменяет роут
    this._router.navigateByUrl('user/' + userId, {skipLocationChange:true});
  }
}