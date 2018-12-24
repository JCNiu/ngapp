import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { cListComponent } from './sAndS/c-list/c-list.component';
import { cTableComponent } from './sAndS/c-table/c-table.component';

import { bevelAngleComponent } from './cssEr/bevel-angle/bevel-angle.component';
import { antFlipComponent } from './cssEr/ant-flip/ant-flip.component';
import { scrollComponent } from './cssEr/scroll/scroll.component';
import { shadowComponent } from './cssEr/shadow/shadow.component';
import { antButtonComponent } from './cssEr/ant-button/ant-button.component';

const routes: Routes = [
    { path: '', redirectTo: '/cssEr-bevelangle', pathMatch: 'full' },
    { path: 'c-listview', component: cListComponent },
    { path: 'c-tableview', component: cTableComponent },

    { path: 'cssEr-bevelangle', component: bevelAngleComponent },
    { path: 'cssEr-antflip', component: antFlipComponent },
    { path: 'cssEr-scroll', component: scrollComponent },
    { path: 'cssEr-shadow', component: shadowComponent },
    { path: 'ant-button', component: antButtonComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {

}