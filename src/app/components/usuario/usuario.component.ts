import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario-model';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit{

  //data: any[]=[]
  usuario:UsuarioModel[]=[];

 Deleteusuario:UsuarioModel=new UsuarioModel();
  constructor(private apiService:UsuarioService, private router:Router){
      
  }

  ngOnInit(): void {
    this.getAllUsuarios();
    
  }

  getAllUsuarios(){ 

    this.apiService.getAll().subscribe(
      response =>{
        this.usuario=response;
      }
    );

  }
  eliminar(cedula: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.apiService.delete(cedula).subscribe(
        response => {
          console.log('Usuario eliminado exitosamente', response);
          this.usuario = this.usuario.filter(u => u.cedula !== cedula);
          //this.getAllUsuarios();
        },
        error => {
          console.error('Error al eliminar el usuario', error);
        }
      );
    }
  }

  editarUser(cedula:string){
    this.router.navigate(['editar',cedula]);
  }


 /* delete(eliminado:UsuarioModel):void{
    this.apiService.delete(eliminado.cedula).subscribe(
         
    )
  }


  confirmDelete(eliminarUsuario: UsuarioModel) {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar al usuario con cédula ${eliminarUsuario.cedula}?`);
    if (confirmed) {
           this.eliminar(eliminarUsuario.cedula);
      console.log('Usuario eliminado:', eliminarUsuario);
    }
  }

  eliminar(cedula:string){
    this.apiService.delete(cedula).subscribe({
      next:(lam)=>this.getAllUsuarios(),
      error:(err:any)=>console.log(err) 
    })
  }*/


}
