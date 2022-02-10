import { Component } from '@angular/core';
import { Estadisticas } from './models/estadisticas';
import { EstadisticasService } from './services/estadisticas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [EstadisticasService]
})
export class AppComponent {
  
  title = 'blog';  
  private estadisticas!: Estadisticas;
  private visitas: number;

  constructor(
    private _estadisticasService: EstadisticasService
  ) {
    this.visitas = 0;
    this.getEstadisticas();
  }

  private getEstadisticas() {
    this._estadisticasService.getEstadisticas().subscribe(
      response => {
        if (response.estadisticas) {
          this.estadisticas = response.estadisticas;
          this.visitas = this.estadisticas.visitas;

          this.visitas++;
          this._estadisticasService.updateVisitas(this.visitas).subscribe();
        }
      },
      error => {

      }
    );
  }

}
