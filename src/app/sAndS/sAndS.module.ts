import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { cListComponent } from './c-list/c-list.component';
import { cgComModule } from '../cgCom/cgCom.module';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        cgComModule
    ],
    exports: [
        CommonModule,
        cListComponent
    ],
    declarations: [
        cListComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class sAndSModule {

}