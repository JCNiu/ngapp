import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { cgComModule } from '../cgCom/cgCom.module';
import { FormsModule } from '@angular/forms';
import { bevelAngleComponent } from './bevel-angle/bevel-angle.component';
import { antFlipComponent } from './ant-flip/ant-flip.component';
import { scrollComponent } from './scroll/scroll.component';
import { shadowComponent } from './shadow/shadow.component';
import { antButtonComponent } from './ant-button/ant-button.component';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        cgComModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        bevelAngleComponent,
        antFlipComponent,
        scrollComponent,
        shadowComponent,
        antButtonComponent
    ],
    declarations: [
        bevelAngleComponent,
        antFlipComponent,
        scrollComponent,
        shadowComponent,
        antButtonComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class cssErModule {

}