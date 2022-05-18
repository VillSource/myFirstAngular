import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./page/page.module').then(m=>m.PageModule)
  },
  {
    path:'blog',
    loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)
  },
  // {path:'blogs', component:BlogComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
