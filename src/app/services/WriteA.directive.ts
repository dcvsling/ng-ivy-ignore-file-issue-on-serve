import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({selector: '[write-a]'})
export class WriteADirective implements OnInit {
  ngOnInit(): void {
    this.renderer.appendChild(this.elf.nativeElement, this.renderer.createText('A'));
  }
  constructor(
    private elf: ElementRef<HTMLElement>,
    private renderer: Renderer2
    ) { }
}
