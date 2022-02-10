import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public _ruta: string;

  constructor() {
    this._ruta = Global.ruta
  }

  ngOnInit(): void {
  }

}
