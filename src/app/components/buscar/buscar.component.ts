import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers: [ArticleService]
})
export class BuscarComponent implements OnInit {

  public articles!: Article[];
  public search!: string;
  public info!: string;
  public _dataurl: string;
  public _ruta: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this._dataurl = Global.dataurl;
    this._ruta = Global.ruta;
  }

  ngOnInit(): void {
    this.buscar();
  }

  private buscar() {
    this._route.params.subscribe(params => {
      var search = params['search'];
      this.search = search;

      this._articleService.search(search).subscribe(
        response => {
          if(response.articles) {
            this.articles = response.articles;
            this.info = "Resultados de la búsqueda...";
          } else {
            this.info = response.mensaje;
            this.articles = [];
          }
        },
        error => {
          console.log(error);
          this.articles = [];
        }
      );
    });
  }

}
