import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMouse]'
})
export class HighlightOnMouseDirective implements OnInit, OnDestroy {
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log(e);    
  }
  
  unsubscribeFormEvents: (() => void)[] = [];

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    //Not recommended
    // this.elRef.nativeElement.style.backgroundColor = 'yellow'

    // Best practice
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red'
    // )

    this.unsubscribeFormEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.handleMouseEnter.bind(this)
      )
    )

    this.unsubscribeFormEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.handleMouseLeave.bind(this)
      )
    )
  }

  handleMouseEnter(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red'
    // )

    this.renderer.addClass(
      this.elRef.nativeElement,
      'highLight'
    )
  }

  handleMouseLeave(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // )

    this.renderer.removeClass(
      this.elRef.nativeElement,
      'highLight'
    )
  }

  ngOnDestroy(): void {
    this.unsubscribeFormEvents.forEach(fn => fn())
  }
}
