import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class NewsService { 
    private dataurl: string;
    private newsJson: string;
    private newsSingleJson: string;    
    private newsPaginacionJson: string;

    constructor(
        private _http: HttpClient
    ) {
        this.dataurl = Global.dataurl;
        this.newsJson = "news_json.php";
        this.newsSingleJson = "news_single_json.php";
        this.newsPaginacionJson = "news_paginacion_json.php";
    }

    getNews(last: any = null): Observable<any> {
        var news = this.newsJson;
        if(last != null) {
            news += "?last=true"; 
        }

        return this._http.get(this.dataurl + news);
    }

    getNewsSingle(id: number): Observable<any> {
        let params = JSON.stringify({ "id": id });
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.dataurl + this.newsSingleJson, params, {headers: headers});
    }

    getNewsPaginacion(newsPorPagina: number, paginaActual: number): Observable<any> {
        return this._http.get(
            this.dataurl + this.newsPaginacionJson + '?news_por_pagina=' + newsPorPagina + '&pagina_actual=' + paginaActual
        );
    }
}