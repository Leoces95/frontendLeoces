
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsumoDeEndpointsService {
  apiUrl = 'http://127.0.0.1:5000'

  constructor( private http: HttpClient){}

  saludo() : String{
    return 'Hola'
  }
  consultarTareas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/verTareas`); // debe coincidir con el endpoint del back
  }
  
  crearTarea(data: any): Observable<any>{
    return this.http.post( (`${this.apiUrl}/crearTarea`), data)
  }
}