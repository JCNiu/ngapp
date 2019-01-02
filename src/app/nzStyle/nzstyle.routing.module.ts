import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'nz-modal', loadChildren: './nz-modal/nz-modal.module#nzModalModule'},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class nzStyleRoutingModule {

}