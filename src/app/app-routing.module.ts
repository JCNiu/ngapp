import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { cListComponent } from './sAndS/c-list/c-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/c-listView', pathMatch: 'full' },
    { path: 'c-listView', component: cListComponent },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {

}