import { Component,OnInit } from '@angular/core';
import { UsuarioModel } from '../model/usuario-model';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarusuarios',
  templateUrl: './editarusuarios.component.html',
  styleUrls: ['./editarusuarios.component.css']
})
export class EditarusuariosComponent implements OnInit{

  usuario:UsuarioModel = new UsuarioModel();
  usuarioLis:UsuarioModel[]=[];

  
  cedula:string="";

  usuario2:any={}
  data:any[]=[]
  roles:any[]=[]
  yhon:string="yhon";
  constructor(private apiService:UsuarioService,private direccion :ActivatedRoute, private navegador:Router){

  }


  
  ngOnInit(): void {
    this.getAllRoles();
    this.getAllEmpresa(); 
    this.geuUsuarios();
 
  }

 getAllEmpresa(){
  this.apiService.getEmpresa().subscribe(
    response=>{
      console.log(response)
      this.data=response;
    }
  )
}

getAllRoles(){
  this.apiService.getRoles().subscribe(
    response=>{
      this.roles=response;
    }
  )
}


geuUsuarios(){
  this.cedula=this.direccion.snapshot.params['cedula'];
  console.log(this.cedula)
  this.apiService.obtenerUsuario(this.cedula).subscribe(
    response=>{
      console.log(response)
      this.usuario=response;
    }
  )
}

onSubmit(){
  this.guardar();
}

private guardar(){
  this.apiService.update(this.usuario).subscribe({
    next:(lamd)=>{
      this.listaUsuario();
      //console.log(this.usuario);
    },
    error:(error:any)=>{console.log(error)}
  })
}

listaUsuario(){
  this.navegador.navigate(['']);
}



  



}
