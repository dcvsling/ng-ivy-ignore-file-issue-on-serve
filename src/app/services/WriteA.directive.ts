import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

export class WriteADirective  {
  ngOnInit(): void {
    this.renderer.appendChild(this.elf.nativeElement, this.renderer.createText('A'));
  }
  constructor(
    private elf: ElementRef<HTMLElement>,
    private renderer: Renderer2
    ) { }
}
