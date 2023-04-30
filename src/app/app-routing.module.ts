import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllinformationComponent } from './allinformation/allinformation.component';

const routes: Routes = [
  { 
    path: '', 
    component: AllinformationComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(n => n.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
