import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { nzTreeComponent } from './nz-tree.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: nzTreeComponent},
        ])
    ],
    exports: [
        CommonModule,
        nzTreeComponent,
        RouterModule
    ],
    declarations: [
        nzTreeComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class nzTreeModule {

}