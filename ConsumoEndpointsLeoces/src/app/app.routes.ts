import { Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { app } from '../../server';
import { AppComponent } from './app.component';
import { SecundarioComponent } from './secundario/secundario.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'inicial', component: InicialComponent},
    {path: 'secundario', component: SecundarioComponent}
];
