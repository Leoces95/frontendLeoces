import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  constructor(private router: Router){

  }
  get(){
    this.router.navigate(['get']);
  }
  put(){
    this.router.navigate(['put']);
  }
  post(){
    this.router.navigate(['post']);
  }
  deletes(){
    this.router.navigate(['delete']);
  }
  inicio(){
    this.router.navigate(['']);
  }
}
