import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { fontComponent } from './font.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: fontComponent}
        ])
    ],
    exports: [
        CommonModule,
        fontComponent,
        RouterModule
    ],
    declarations: [
        fontComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class fontModule {

}