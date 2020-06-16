import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { TransformHtmlPipe } from './transform-html/transform-html.pipe';
import { DefaultTextPipe } from './default-text/default-text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TransformHtmlPipe, DefaultTextPipe],
  declarations: [TransformHtmlPipe, DefaultTextPipe]
})
export class PipesModule { }
