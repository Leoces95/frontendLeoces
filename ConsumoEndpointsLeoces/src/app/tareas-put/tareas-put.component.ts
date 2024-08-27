import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas-put',
  standalone: true,
  imports: [],
  templateUrl: './tareas-put.component.html',
  styleUrl: './tareas-put.component.css'
})
export class TareasPutComponent {

  constructor(private router: Router){}
  post(){
    this.router.navigate(['put'])
  }
  menu(){
    this.router.navigate(['']);
  }
  atras(){
    this.router.navigate(['tareas']);
  }

}
