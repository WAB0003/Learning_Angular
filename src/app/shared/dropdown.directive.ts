import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    // Create a Selector that can be used to bind an attribute in an HTML element
    selector:'[appDropdown]'
})
export class DropdownDirective {
    // HOST BINDING allows developers to bind property of the host element to a property of the directive
    // Bind 'open' class property of the hosted element to the isOpen boolean value
    @HostBinding('class.open') 
    isOpen = false;

    // WHEN INITIALIZED, assign a reference to the element that this directive belongs to
    constructor(private elementRef: ElementRef){

    }

    //ADD EVENT LISTENER that fires toggle method whenever host element is 'clicked'
    //Here's a list of all events: https://www.w3schools.com/jsref/dom_obj_event.asp
    @HostListener('click') 
    toggleOpen(){
        this.isOpen = !this.isOpen
    }

};