import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ArticleService { 
    private dataurl: string;
    private articulosjson: string;
    private articulojson: string;    
    private searchjson: string;
    private articulosPaginacionJson: string;

    constructor(
        private _http: HttpClient
    ) {
        this.dataurl = Global.dataurl;
        this.articulosjson = "articulos_json.php";
        this.articulojson = "articulo_json.php";
        this.searchjson = "search_json.php";
        this.articulosPaginacionJson = "articulos_paginacion_json.php"
    }

    getArticles(last: any = null): Observable<any> {
        var articles = this.articulosjson;
        if(last != null) {
            articles += "?last=true"; 
        }

        return this._http.get(this.dataurl + articles);
    }

    getArticle(id: number): Observable<any> {
        let params = JSON.stringify({ "id": id });
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.dataurl + this.articulojson, params, {headers: headers});
    }

    search(searchString: any): Observable<any> {
        return this._http.get(this.dataurl + this.searchjson + '?search=' + searchString);
    }

    getArticulosPaginacion(articulosPorPagina: number, paginaActual: number): Observable<any> {
        return this._http.get(
            this.dataurl + this.articulosPaginacionJson + '?articulos_por_pagina=' + articulosPorPagina + '&pagina_actual=' + paginaActual
        );
    }
}