import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { DatatestComponent } from './components/datatest/datatest.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { NewsComponent } from './components/news/news.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    DatatestComponent,
    ArticlesComponent,
    NewsComponent,
    ContactoComponent,
    FooterComponent,
    BlogComponent,
    ArticleComponent,
    NewsSingleComponent,
    BuscarComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
