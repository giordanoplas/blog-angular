import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public _ruta: string;
  public searchString!: string;
  faSearch = faSearch;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this._ruta = Global.ruta;
  }

  ngOnInit(): void {
  }

  goSearch() {
    this._router.navigate(['/buscar', this.searchString]);
  }

}
