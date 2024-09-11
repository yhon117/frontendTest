import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CreateusuariosComponent } from './createusuarios/createusuarios.component';
import { EditarusuariosComponent } from './editarusuarios/editarusuarios.component';

const routes: Routes = [

  {path: '', component:UsuarioComponent},
  {path: 'create',component:CreateusuariosComponent},
  {path: 'editar/:cedula',component:EditarusuariosComponent}
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
