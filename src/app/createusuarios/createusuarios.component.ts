import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioModel } from '../model/usuario-model';


@Component({
  selector: 'app-createusuarios',
  templateUrl: './createusuarios.component.html',
  styleUrls: ['./createusuarios.component.css']
})
export class CreateusuariosComponent implements OnInit{
  data:any[]=[]
  roles:any[]=[]
  usuario: UsuarioModel= new UsuarioModel();
  rol:UsuarioModel[]=[];
  empresa2:UsuarioModel[]=[];
  // private fb = inject(FormBuilder)
// formUsuario: FormGroup = new FormGroup({});
  private router= inject(Router)
  constructor(private apiService:UsuarioService,private navegador:Router){


  }

  ngOnInit(): void {
    this.getAllRoles();
    this.getAllEmpresa();

  }

  getAllRoles(){
    this.apiService.getRoles().subscribe(
      response=>{
        this.roles=response;
      }
    )
  }

  getAllEmpresa(){
    this.apiService.getEmpresa().subscribe(
      response=>{
        this.data=response;
      }
    )
  }

  onSubmit(){
    this.guardar();
  }
  

  private guardar(){
    this.apiService.postUsuario(this.usuario).subscribe({
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

   /*getAllEmpresa(){
    this.apiService.getEmpresa().subscribe(
      response=>{
        this.data=response;
      }
    )
  }



  

 usuarioModel:UsuarioModel=new UsuarioModel;
  guardar(){
    this.apiService.postUsuario(this.usuarioModel)
    .subscribe(data=>{
      alert("se agrego con exito el usuario")
      this.router.navigate([""]);
    })
  }*/


}
