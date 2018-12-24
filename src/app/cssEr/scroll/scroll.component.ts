import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'csser-scroll',
    templateUrl: 'scroll.component.html',
    styleUrls: ['scroll.component.scss']
})

export class scrollComponent implements OnInit {
    isScrollX: boolean = true;  // 横向滚动条
    isScrollY: boolean = true;  // 纵向滚动条
    width: string = 'auto';
    scrollWidth: string= '1000px';
    
    // 无内容状态下 高度auto 会默认为零 则相当于div不存在 横向滚动条也不会生效
    // height: string = 'auto'; 
    
    height: string = '100px';
    scrollHeight: string = '500px';
    
    constructor() { }

    ngOnInit() { }
}