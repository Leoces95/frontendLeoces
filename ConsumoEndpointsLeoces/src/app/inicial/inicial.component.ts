import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecundarioComponent } from '../secundario/secundario.component';
import { ConsumoDeEndpointsService } from '../consumo-de-endpoints.service';
import { isBoolean } from 'util';
import { ok } from 'assert';
import { error } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [SecundarioComponent], 
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {

constructor(private router: Router, private consumoDeEndpointsService: ConsumoDeEndpointsService){}

  clickLeo(): void{
    console.log('el boton ha sido clikeado');    
    this.router.navigate(['secundario']);
    let test = this.consumoDeEndpointsService.saludo();
    alert(test)
    this.consumoDeEndpointsService.mensajeBienvenida().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
      },
      error: (error) => {
        console.error('Error al recibir los datos:', error);
      },
      complete: () => {
        console.log('Solicitud completada exitosamente.');
      }
    });
  }  
}