import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { nzModalComponent } from './nz-modal.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: nzModalComponent},
        ])
    ],
    exports: [
        CommonModule,
        nzModalComponent,
        RouterModule
    ],
    declarations: [
        nzModalComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class nzModalModule {

}