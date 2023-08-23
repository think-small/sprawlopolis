import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngRepeat]'
})
export class RepeatDirective {
  @Input('ngRepeat')
  set times(times: number) {
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

  constructor(
    private readonly template: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) { }

}
