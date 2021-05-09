import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyForDirective implements OnChanges {
  @Input() myForOf: Array<any>;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (!this.myForOf) return;
    for (let item of this.myForOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.myForOf.indexOf(item)
      });
    }
  }

}
