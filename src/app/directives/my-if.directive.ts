import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective implements OnChanges {
  @Input('myIf') condition: boolean;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef

  ) { }

  ngOnChanges() {
    console.log(this.condition);
    this.condition ? this.container.createEmbeddedView(this.template) : this.container.clear();
  }

}
