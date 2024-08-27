import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoDeEndpointsService } from '../consumo-de-endpoints.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas-post.component.html',
  styleUrl: './tareas-post.component.css'
})
export class TareasPostComponent {
  tareaId: number = 0;
  constructor(private router: Router,
    private consumoDeEndpoints: ConsumoDeEndpointsService
  ){}
  post(){
    this.router.navigate(['post'])
  }
  menu(){
    this.router.navigate(['']);
  }
  atras(){
    this.router.navigate(['tareas']);
  }

  crearTarea(){
    const datos = {
      tarea_id: 1
    }
    this.consumoDeEndpoints.crearTarea(datos).subscribe(response => {
      console.log('respuesta:', response)
    })
  }

}
