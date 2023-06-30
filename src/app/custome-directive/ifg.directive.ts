import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfg]'
})
export class IfgDirective {
//1 what to remove 
//2 where to remove

  constructor(private template: TemplateRef<any>,private viewContainer: ViewContainerRef) { 

  }
@Input() set displayView(condition: boolean){
  if(condition){
    this.viewContainer.createEmbeddedView(this.template)
  }else{
    this.viewContainer.clear();
  }
}
}
