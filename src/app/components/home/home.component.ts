import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';
import { News } from '../../models/news';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService, NewsService]
})
export class HomeComponent implements OnInit { 

  public mainTitle: string;
  public articles!: Array<Article>;
  public news!: News[];
  public isHome: boolean;

  constructor(
    private _articleService: ArticleService,
    private _newsService: NewsService,
    private _router: Router
  ) { 
    this.mainTitle = "Últimos artículos";
    this.isHome = true;
  }

  ngOnInit(): void {
    this.getArticles();    
    this.getNews();
  }

  private getArticles() {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response.articles) {
          this.articles = response.articles;
        } else {
          this.articles = [];
        }
      },
      error => {
        this._router.navigate(['/error']);
      }
    );
  }

  private getNews() {
    this._newsService.getNews(true).subscribe(
      response => {
        if (response.novedades) {
          this.news = response.novedades;
        } else {
          this.news = [];
        }
      },
      error => {
        this._router.navigate(['/error']);
      }
    );
  }
}