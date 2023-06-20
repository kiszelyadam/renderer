import { AfterViewInit, Directive, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[renderer]'
})
export class RendererDirective implements AfterViewInit, OnDestroy {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2
  ) { }

    ngAfterViewInit(): void {
      this.renderer2.addClass(this.elementRef.nativeElement, 'red');
      this.renderer2.removeClass(this.elementRef.nativeElement, 'red');
    }

    ngOnDestroy(): void {
      this.renderer2.destroy();
    }

}
