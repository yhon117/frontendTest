import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-createusuarios',
  templateUrl: './createusuarios.component.html',
  styleUrls: ['./createusuarios.component.css']
})
export class CreateusuariosComponent implements OnInit{
  data: any[]=[]
  roles:any[]=[]
  constructor(private apiService:UsuarioService){

  }

  ngOnInit(): void {
    this.getAllEmpresa();
    this.getAllRoles();
  }

  getAllEmpresa(){
    this.apiService.getEmpresa().subscribe(
      response=>{
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



}
