import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { tabComponent } from './tab.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: tabComponent}
        ])
    ],
    exports: [
        CommonModule,
        tabComponent,
        RouterModule
    ],
    declarations: [
        tabComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class tabModule {

}