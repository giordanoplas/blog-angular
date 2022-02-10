import { Component, Input, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { NewsService } from '../../services/news.service';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css'],
  providers: [ArticleService, NewsService]
})
export class PaginacionComponent implements OnInit {

  public articulosPorPagina: number;
  public newsPorPagina: number;
  public numeroPaginas: number = 0;
  public paginaActual!: number;
  @Input() isNews!: boolean;

  faAngleDoubleRight = faAngleDoubleRight;
  faAngleDoubleLeft = faAngleDoubleLeft;

  constructor(
    private _articleService: ArticleService,
    private _newsService: NewsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.articulosPorPagina = Global.articulos_por_pagina;
    this.newsPorPagina = Global.novedades_por_pagina;
  }

  ngOnInit(): void {
    this.getPaginaActual();
    this.getNumeroPaginas();
  }

  private getNumeroPaginas() {
    if (!this.isNews) {
      this._articleService.getArticulosPaginacion(this.articulosPorPagina, this.paginaActual).subscribe(
        response => {
          if (response.numeroPaginas) {
            this.numeroPaginas = response.numeroPaginas;
          }
        },
        error => {
          this._router.navigate(['/error']);
        }
      );
    } else { 
      this._newsService.getNewsPaginacion(this.newsPorPagina, this.paginaActual).subscribe(
        response => {
          if (response.numeroPaginas) {
            this.numeroPaginas = response.numeroPaginas;
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

  createRange(number: number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  loadPage(selectedPage: number) {
    if (!this.isNews) {
      this._router.navigate(['/articles', selectedPage])
        .then(() => {
          location.reload();
        });
    } else {
      this._router.navigate(['/news', selectedPage])
        .then(() => {
          location.reload();
        });
    }
  }

}
