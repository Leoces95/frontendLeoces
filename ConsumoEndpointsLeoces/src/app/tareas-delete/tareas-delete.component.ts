import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas-delete',
  standalone: true,
  imports: [],
  templateUrl: './tareas-delete.component.html',
  styleUrl: './tareas-delete.component.css'
})
export class TareasDeleteComponent {
  constructor(private router: Router){}
  deletes(){
    this.router.navigate(['post'])
  }
  menu(){
    this.router.navigate(['']);
  }
  atras(){
    this.router.navigate(['tareas']);
  }
}
