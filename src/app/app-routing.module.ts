import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewsComponent } from './components/news/news.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:p', component: ArticlesComponent },
  { path: 'articles/:p', component: ArticlesComponent },
  { path: 'articles/article/:id', component: ArticleComponent },
  { path: 'buscar/:search', component: BuscarComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:p', component: NewsComponent },
  { path: 'news/news_single/:id', component: NewsSingleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }