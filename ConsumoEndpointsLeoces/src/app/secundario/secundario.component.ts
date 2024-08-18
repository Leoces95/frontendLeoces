import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secundario',
  standalone: true,
  imports: [],
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.css'
})
export class SecundarioComponent {

  constructor(private router: Router){}

  segundo() {
    console.log('segundo boton');    
    this.router.navigate(['']);
    }
    
}
