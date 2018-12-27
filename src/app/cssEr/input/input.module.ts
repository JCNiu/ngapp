import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { inputComponent } from './input.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: inputComponent}
        ])
    ],
    exports: [
        CommonModule,
        inputComponent,
        RouterModule
    ],
    declarations: [
        inputComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class inputModule {

}