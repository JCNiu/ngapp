import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'c-listview', loadChildren: './c-list/c-list.module#cListModule'},
            { path: 'c-tableview', loadChildren: './c-table/c-table.module#cTableModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class sAndSRoutingModule {

}