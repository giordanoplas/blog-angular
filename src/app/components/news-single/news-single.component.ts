import { Component, OnInit, Input, Output } from '@angular/core';
import { News } from '../../models/news';
import { NewsService } from '../../services/news.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css'],
  providers: [NewsService]
})
export class NewsSingleComponent implements OnInit {

  public _dataurl: string;
  public _ruta: string;
  @Input() news!: News;
  @Input() isHome!: boolean;

  constructor(
    private _newsService: NewsService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _modalService: NgbModal
  ) {     
    this._dataurl = Global.dataurl;
    this._ruta = Global.ruta;
    this.isHome = false;
  }

  ngOnInit(): void {
    this.getNewsSingle();
  }

  private getNewsSingle() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._newsService.getNewsSingle(id).subscribe(
        response => {
          if(response.novedad) {
            this.news = response.novedad;
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
