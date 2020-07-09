import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';

@NgModule({
  declarations: [ShortcutPipe],
  imports: [CommonModule],
  exports: [ShortcutPipe],
})
export class PipeModule {}
