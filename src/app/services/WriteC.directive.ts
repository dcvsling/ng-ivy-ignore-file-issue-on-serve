import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[write-c]' })
export class WriteCDirective implements OnInit {
  ngOnInit(): void {
    this.renderer.appendChild(this.elf.nativeElement, this.renderer.createText('C'));
  }
  constructor(
    private elf: ElementRef<HTMLElement>,
    private renderer: Renderer2
    ) { }
}
