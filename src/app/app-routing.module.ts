import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'page',
    loadChildren:()=>import('./page/page.module').then(m=>m.PageModule)
  },
  {
    path:'',
    loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
