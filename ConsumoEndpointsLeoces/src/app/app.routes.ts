import { Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { AppComponent } from './app.component';
import { SecundarioComponent } from './secundario/secundario.component';


export const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'inicial', component: InicialComponent,
        children: [{path: 'secundario', component: SecundarioComponent},

        ]
    },
    {path: 'secundario', component: SecundarioComponent},
     
];
