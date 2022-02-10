import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public _ruta: string;

  constructor() { 
    this._ruta = Global.ruta;
  }

  ngOnInit(): void {
  }

}
