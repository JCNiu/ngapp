import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'csser-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})

export class navigationComponent implements OnInit {
    
    demo1AntValue: string = 'fadeInUp';

    // 进场动画
    antInValue: string[] = ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 
                            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'bounce'];
    // demo1 模拟数据
    demo1Mock: string[] = ['Home', 'News', 'Contact', 'Works', 'Team', 'About'];

    constructor() { }

    ngOnInit() { }
}