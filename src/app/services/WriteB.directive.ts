import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[write-b]' })
export class WriteBDirective implements OnInit {
  ngOnInit(): void {
    this.renderer.appendChild(this.elf.nativeElement, this.renderer.createText('B'));
  }
  constructor(
    private elf: ElementRef<HTMLElement>,
    private renderer: Renderer2
    ) { }
}
