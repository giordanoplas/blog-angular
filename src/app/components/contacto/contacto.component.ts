import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { faEnvelopeOpenText, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public mainTitle: string;
  public _ruta: string;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faArrowCircleRight = faArrowCircleRight;

  constructor() { 
    this.mainTitle = "Contacto";
    this._ruta = Global.ruta;
  }

  ngOnInit(): void {
  }

}
