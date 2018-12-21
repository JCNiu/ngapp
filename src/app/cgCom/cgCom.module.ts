import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cgListComponent } from './cg-list/cg-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        cgListComponent
    ],
    declarations: [
        cgListComponent
    ]
})
export class cgComModule {

}