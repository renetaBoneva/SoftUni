import { Directive, OnChanges, SimpleChanges, Input, TemplateRef, ViewContainerRef, Optional } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'appMyStructuralDirective'
})
export class MyStructuralDirectiveDirective implements OnChanges {
  @Input() appMyStructuralDirective: boolean = false;
  @Input() myTmpProp: any;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const templ = this.templateRef || this.myTmpProp;
    
    if(!templ){
      return;
    }
    
    if(this.appMyStructuralDirective){
      this.vcRef.createEmbeddedView(templ, {
        value: 'value from ngOnChanges',
        $implicit: 'That\'s implicit value'
      })
    } else {
      this.vcRef.clear();
    }    
  }
}
