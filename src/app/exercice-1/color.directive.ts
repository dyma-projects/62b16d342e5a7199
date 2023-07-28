import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef<HTMLParagraphElement>) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;

    switch (key) {
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'black';
        break;
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'green';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
    }
  }
}
