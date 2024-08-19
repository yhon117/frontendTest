import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class  UsuarioService {

  private urlApi="http://localhost:8080/api/usuario";  
  constructor(private http:HttpClient) { 
    
  }

  public getUsuarios(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/get');
  }

  public postUsuario(usuarioModel:UsuarioModel):Observable<Object> {
    return this.http.post<UsuarioModel>(this.urlApi+'/save',usuarioModel);
  }

  public getEmpresa(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/getEmpresa');
  }

  public getRoles(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/getRoles');
  }
  
}
