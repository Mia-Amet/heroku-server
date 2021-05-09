import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[bg]',
  host: {
    '(click)': 'onClick()'
  }
})
export class BgDirective {
  // @Input() bgColor: string;
  @Input() fontColor: string;
  @Input('bg') bgColor: string;

  constructor(
    private elRef: ElementRef,
    private render: Renderer2
  ) {
    // this.elRef.nativeElement.classList.add('bg-secondary');
  }

  // @HostListener('click') onClick() {
  //   this.render.addClass(this.elRef.nativeElement, 'bg-secondary');
  // }

  onClick() {
    // this.render.addClass(this.elRef.nativeElement, 'bg-secondary');

    if (!this.bgColor) this.bgColor = 'white';
    if (!this.fontColor) this.fontColor = 'black';

    this.render.setStyle(this.elRef.nativeElement, 'background-color', this.bgColor);
    this.render.setStyle(this.elRef.nativeElement, 'color', this.fontColor);
  }
}
