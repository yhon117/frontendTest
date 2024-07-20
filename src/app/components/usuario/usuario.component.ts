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
}
