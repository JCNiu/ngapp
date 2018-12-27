import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'csser-animate',
    templateUrl: 'animate.component.html',
    styleUrls: ['animate.component.scss']
})

export class animateComponent implements OnInit {
    // 动画绑定
    antValue: string = 'fadeIn';
    // 晃动效果
    attentionAnt: string[] = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 
                            'headShake', 'swing', 'tada', 'wobble', 'jello'];
    // 弹性缓冲效果
    bounceAnt: string[] = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 
                        'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 
                        'bounceOutUp'];
    // 透明度变化效果
    fadeAnt: string[] = ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 
                        'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 
                        'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 
                        'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig'];
    // 翻转效果
    flipAnt: string[] = ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'];
    // 旋转效果
    rotateAnt: string[] = ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 
                        'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft',
                        'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight'];
    // 滑动效果
    slideAnt: string[] = ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 
                            'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'];
    // 变焦效果
    zoomAnt: string[] = ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 
                        'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'];
    // 特殊效果
    specialAnt: string[] = ['hinge', 'rollIn', 'rollOut', 'lightSpeedIn', 'lightSpeedOut'];

    constructor() { }

    ngOnInit() { }
}