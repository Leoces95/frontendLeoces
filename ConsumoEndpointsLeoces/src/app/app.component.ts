import { Component } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  title = 'ConsumoEndpointsLeoces';

  constructor(private route: Router) {
    // Se pueden definir otras variables, pero no es ideal en el constructor
    }

  Saludo(){        
    this.route.navigate(['']);
  }

}