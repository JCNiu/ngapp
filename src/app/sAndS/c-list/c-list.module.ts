import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { cListComponent } from './c-list.component';
import { cgComModule } from 'src/app/cgCom/cgCom.module';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        cgComModule,
        RouterModule.forChild([
            { path: '', component: cListComponent}
        ])
    ],
    exports: [
        CommonModule,
        cListComponent,
        RouterModule
    ],
    declarations: [
        cListComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class cListModule {

}