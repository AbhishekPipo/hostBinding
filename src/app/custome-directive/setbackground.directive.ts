import { Directive } from "@angular/core";
import { ElementRef , Renderer2 ,HostBinding ,HostListener } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class Background{
    constructor(private element: ElementRef,private renderer: Renderer2){
   
    }
    defaultColor: string ='transparent';
    highlightColor: string="pink"

    @HostBinding('style.backgroundColor') background: string=this.defaultColor;
    @HostBinding('style.border') border: string="none";

@HostListener('mouseenter') mouseenter(){
    this.background=this.highlightColor
    this.border='red 2px solid'
}
@HostListener('mouseleave') mouseleave(){
    this.background=this.defaultColor;
    this.border='none'

}
}