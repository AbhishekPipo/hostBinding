import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './custome-directive/betterhighlight.directive';
import { HighLight } from './custome-directive/highlight.directive';
import { Hover } from './custome-directive/hover.directive';
import {  Background } from './custome-directive/setbackground.directive';
import { ClassDirective } from './custome-directive/class.directive';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { StyleDirective } from './custome-directive/style.directive';
import { IfgDirective } from './custome-directive/ifg.directive';
@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    HighLight,
    Hover,
    Background,
    ClassDirective,
    HighlightDirective,
    StyleDirective,
    IfgDirective,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
