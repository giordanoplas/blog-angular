import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class EstadisticasService { 

    private dataurl: string;
    private estadisticasjson: string;

    constructor(
        private _http: HttpClient
    ) {
        this.dataurl = Global.dataurl;
        this.estadisticasjson = "estadisticas_json.php";
    }

    getEstadisticas(): Observable<any> {
        return this._http.get(this.dataurl + this.estadisticasjson);
    }

    updateVisitas(visitas: number): Observable<any> {
        return this._http.get(this.dataurl + this.estadisticasjson + '?visitas=' + visitas);
    }

}