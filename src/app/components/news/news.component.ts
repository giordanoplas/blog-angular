import { Component, OnInit, Input, Output } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  public mainTitle: string;
  public _dataurl: string;
  public _ruta: string;
  public isNews: boolean;
  public newsPorPagina: number;
  public paginaActual!: number;
  @Input() news!: Array<News>;
  @Input() isHome!: boolean;

  constructor(
    private _newsService: NewsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _modalService: NgbModal
  ) {
    this.mainTitle = "Novedades";
    this._dataurl = Global.dataurl;
    this._ruta = Global.ruta;
    this.isHome = false;
    this.isNews = true;
    this.newsPorPagina = Global.novedades_por_pagina;
  }

  ngOnInit(): void {
    this.getPaginaActual();
    this.getNews();
  }

  private getNews() {
    if (!this.isHome) {
      this._newsService.getNewsPaginacion(this.newsPorPagina, this.paginaActual).subscribe(
        response => {
          if (response.news) {
            this.news = response.news;
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

  private getPaginaActual() {
    this._route.params.subscribe(params => {
      this.paginaActual = Number.parseInt(params['p']) || 1;
    });
  }

  openModal(content: any) {
    this._modalService.open(content, {ariaLabelledBy: content, size: 'lg'});
  }

}
