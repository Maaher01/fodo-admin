import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NumbersOnlyDirective } from './custom directives/numbers-only.directive';

@NgModule({
  declarations: [TruncatePipe, NumbersOnlyDirective],
  imports: [CommonModule],
  exports: [TruncatePipe, NumbersOnlyDirective],
})
export class SharedModule {}
