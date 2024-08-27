import { Routes } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';
import { TareasGetComponent } from './tareas-get/tareas-get.component';
import { TareasPutComponent } from './tareas-put/tareas-put.component';
import { TareasPostComponent } from './tareas-post/tareas-post.component';
import { TareasDeleteComponent } from './tareas-delete/tareas-delete.component';


export const routes: Routes = [
    {path: '', component: TareasComponent},    
    {path: 'tareas', component: TareasComponent},
    {path: 'get', component: TareasGetComponent},
    {path: 'put', component: TareasPutComponent},
    {path: 'post', component: TareasPostComponent}   ,
    {path: 'delete', component: TareasDeleteComponent}         
];
