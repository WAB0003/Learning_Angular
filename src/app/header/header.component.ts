import { Component, EventEmitter, Output } from "@angular/core";

// HEADER COMPONENT
@Component({
    selector:"app-header",
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css'
})

export class HeaderComponent {
    // CREATE AN EVENT EMITTER VARIABLE TO 'EMIT' INFORMATION TO PARENT COMPONENT USING OUTPUT
    @Output() 
    clickedHeader = new EventEmitter<string>();

    // CREATE A 'CLICK' METHOD THAT GRABS INFORMATION WHENEVER A NAV OPTION IS SELECTED AND EMITS IT TO THE PARENT
    onClickHeader(selectedHeader:string ){
        this.clickedHeader.emit(selectedHeader)
    }

};
