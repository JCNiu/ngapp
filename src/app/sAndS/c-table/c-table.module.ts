import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { cTableComponent } from './c-table.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: cTableComponent}
        ])
    ],
    exports: [
        CommonModule,
        cTableComponent,
        RouterModule
    ],
    declarations: [
        cTableComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class cTableModule {

}