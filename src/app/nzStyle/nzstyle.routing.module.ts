import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'nz-modal', loadChildren: './nz-modal/nz-modal.module#nzModalModule'},
            { path: 'nz-tree', loadChildren: './nz-tree/nz-tree.module#nzTreeModule'},
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class nzStyleRoutingModule {

}