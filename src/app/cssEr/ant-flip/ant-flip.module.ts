import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { antFlipComponent } from './ant-flip.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: antFlipComponent}
        ])
    ],
    exports: [
        CommonModule,
        antFlipComponent,
        RouterModule
    ],
    declarations: [
        antFlipComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class antFlipModule {

}