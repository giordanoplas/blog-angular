import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models/article';
import { News } from '../../models/news';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {

  public _dataurl: string;
  public _ruta: string;
  public articulosPorPagina: number;
  public paginaActual!: number;

  @Input() articles!: Article[];
  @Input() news!: News[];
  @Input() isHome!: boolean;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _modalService: NgbModal
  ) {
    this._dataurl = Global.dataurl;
    this._ruta = Global.ruta;
    this.isHome = false;
    this.articulosPorPagina = Global.articulos_por_pagina;
    /*this._router.events.subscribe(() => {
      this.getArticles();
    });    */
  }

  ngOnInit(): void {
    this.getPaginaActual();
    this.getArticles();
  }

  private getArticles() {
    if (!this.isHome) {
      this._articleService.getArticulosPaginacion(this.articulosPorPagina, this.paginaActual).subscribe(
        response => {
          if (response.articles) {
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
  }

  private getPaginaActual() {
    this._route.params.subscribe(params => {
      this.paginaActual = Number.parseInt(params['p']) || 1;
    });
  }

  openModal(content: any) {
    this._modalService.open(content, {ariaLabelledBy: content, windowClass: 'modal-animation', centered: true, size: 'lg'});
  }

}
