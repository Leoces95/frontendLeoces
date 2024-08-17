import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {

  clickLeo(): void{
    console.log('el boton ha sido clikeado');
  }

}
