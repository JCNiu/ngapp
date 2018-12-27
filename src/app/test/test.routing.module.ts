import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild([
        { path: 'test1', loadChildren: './test1/test1.module#test1Module'}
    ])
  ]
})
export class testModule { }