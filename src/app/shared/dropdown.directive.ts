import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen = false;
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  // constructor() { }

  constructor(private elRef : ElementRef, private renderer : Renderer2) { }
  private isOpen = false;
  @HostListener('click') toggleOpen() {
    const dropdown = this.elRef.nativeElement.nextElementSibling;
    
    if (!this.isOpen) {
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(dropdown, 'show');
    }

    document.addEventListener('click', (event) => {
      if (event.target !== this.elRef.nativeElement) {
          this.isOpen = false;
          this.renderer.removeClass(dropdown, 'show');
      }
  });
    this.isOpen = !this.isOpen;

  }


}
