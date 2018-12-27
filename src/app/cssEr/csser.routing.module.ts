import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

let csser: string = 'csser-';
@NgModule({
    imports: [ RouterModule.forChild([
        { path: csser + 'bevelangle', loadChildren: './bevel-angle/bevel-angle.module#bevelAngleModule' },
        { path: csser + 'antflip', loadChildren: './ant-flip/ant-flip.module#antFlipModule' },
        { path: csser + 'scroll', loadChildren: './scroll/scroll.module#scrollModule' },
        { path: csser + 'shadow', loadChildren: './shadow/shadow.module#shadowModule' },
        { path: csser + 'ant-button', loadChildren: './ant-button/ant-button.module#antButtonModule' },
        { path: csser + 'font', loadChildren: './font/font-module#fontModule' },
        { path: csser + 'input', loadChildren: './input/input.module#inputModule' },
        { path: csser + 'price-list', loadChildren: './price-list/price-list.module#priceListModule' },
        { path: csser + 'navigation', loadChildren: './navigation/navigation.module#navigationModule' },
        { path: csser + 'animate', loadChildren: './animate/animate.module#animateModule' }
    ]) ],
    exports: [ RouterModule ]
})


export class csserRoutingModule {

}