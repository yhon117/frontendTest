import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CreateusuariosComponent } from './createusuarios/createusuarios.component';

const routes: Routes = [

  {path: '', component:UsuarioComponent},
  {path: 'create',component:CreateusuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
