import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { test1Component } from './test1.component';




@NgModule({
    declarations: [
        test1Component
    ],
    imports: [ RouterModule.forChild([
        { path: "", component: test1Component }
    ]) ],
    exports: [ RouterModule,test1Component ]
})


export class test1Module {

}