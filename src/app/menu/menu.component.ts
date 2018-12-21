import { Component, OnInit } from '@angular/core';
import { menu } from './menu';
import { MENUES } from './mock-menu';
@Component({
    selector: 'menu-view',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {
    menues: menu[];
    constructor() { }

    ngOnInit() { this.getMenues(); }

    getMenues() {
        this.menues = MENUES;
    }

    log() {
        console.log(1111);
        
    }
}