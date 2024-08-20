import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit{

  data: any[]=[]
  constructor(private apiService:UsuarioService){
      
  }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios(){

    this.apiService.getUsuarios().subscribe(
      response =>{
        this.data=response;
      }
    );

  }

  confirmDelete(item: any) {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar al usuario con cédula ${item.cedula}?`);
    if (confirmed) {
           this.eliminar(item);
      console.log('Usuario eliminado:', item);
    }
  }

  eliminar(cedula:string){
    this.apiService.deleteUsuario(cedula).subscribe({
      next:(lam)=>this.getAllUsuarios(),
      error:(err:any)=>console.log(err) 
    })
  }
}
