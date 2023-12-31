import { Directive } from "@angular/core";
import { ElementRef , Renderer2 ,HostBinding ,HostListener } from "@angular/core";

@Directive({
    selector: '[apphighlight]'
})


export class HighLight{
    constructor(private element: ElementRef,private renderer: Renderer2){
   
    }

    @HostBinding('style.backgroundColor') background: string="transparent";
    @HostBinding('style.border') border: string="none";

@HostListener('mouseenter') mouseenter(){
    this.background="blue"
    this.border='red 2px solid'
}
@HostListener('mouseleave') mouseleave(){
    this.background="transparent";
    this.border='none'

}
}