import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleViewComponent } from './component/article-view/article-view.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: '',   redirectTo: '/home', pathMatch: 'full' }, // 
   { path: 'article-list', component: ArticleListComponent },
   { path: 'view/:id', component: ArticleViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
