import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loadComponent } from './load.component';



@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: loadComponent}
        ])
    ],
    exports: [
        CommonModule,
        loadComponent,
        RouterModule
    ],
    declarations: [
        loadComponent
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class loadModule {

}