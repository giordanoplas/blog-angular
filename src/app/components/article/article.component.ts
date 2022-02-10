import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public _dataurl: string;
  public _ruta: string;
  @Input() article!: Article;
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
  }

  ngOnInit(): void {
    this.getArticle();
  }

  private getArticle() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/error']);
        }
      );
    });
  }

  openModal(content: any) {
    this._modalService.open(content, {ariaLabelledBy: content, size: 'lg'});
  }

}
