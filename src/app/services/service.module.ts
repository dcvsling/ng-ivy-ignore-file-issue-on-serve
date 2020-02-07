import { NgModule } from '@angular/core';
import { WriteADirective } from './WriteA.directive';
import { WriteBDirective } from './WriteB.directive';
import { WriteCDirective } from './WriteC.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WriteADirective,
    WriteBDirective,
    WriteCDirective
  ],
  declarations: [
    WriteADirective,
    WriteBDirective,
    WriteCDirective
  ],
  providers: [],
})
export class ServiceModule { }
