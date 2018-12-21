import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cg-list',
    templateUrl: 'cg-list.component.html',
    styleUrls: ['cg-list.component.scss']
})

export class cgListComponent implements OnInit {
    @Input() data: any[];
    constructor() { }

    ngOnInit() { }
}