import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoDeEndpointsService } from '../consumo-de-endpoints.service';

@Component({
  selector: 'app-tareas-get',
  standalone: true,
  imports: [],
  templateUrl: './tareas-get.component.html',
  styleUrl: './tareas-get.component.css'
})
export class TareasGetComponent {
  constructor(private router: Router,
    private consumoDeEndpointsService: ConsumoDeEndpointsService
  ){}

  menu(){
    this.router.navigate(['']);
  }
  atras(){
    this.router.navigate(['tareas']);
  }

  verTareas(){
    this.consumoDeEndpointsService.consultarTareas().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
      },
      error: (error) => {
        console.error('Error al recibir los datos:', error);
      },
      complete: () => {
        console.log('Solicitud completada exitosamente.');
      }
    }
    )}
}
