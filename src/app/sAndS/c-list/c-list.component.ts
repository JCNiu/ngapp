import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c-list-view',
    templateUrl: 'c-list.component.html',
    styleUrls: ['c-list.component.scss']
})

export class cListComponent implements OnInit {
    data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ];
    constructor() { }

    ngOnInit() { }
}