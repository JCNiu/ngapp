import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { shadowComponent } from './shadow.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: shadowComponent}
        ])
    ],
    exports: [
        CommonModule,
        shadowComponent,
        RouterModule
    ],
    declarations: [
        shadowComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class shadowModule {

}