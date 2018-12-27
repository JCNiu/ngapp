import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/sands/c-listview', pathMatch: 'full' },
    { path: 'sands', loadChildren: './sAndS/sands.routing.module#sAndSRoutingModule'},
    { path: 'csser', loadChildren: './cssEr/csser.routing.module#csserRoutingModule'},
    
    // { path: '**', component: cListComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {

}