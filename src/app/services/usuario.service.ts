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
  public getAll(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(this.urlApi + '/get');
  }

  public postUsuario(usuario:UsuarioModel):Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(this.urlApi+'/save',usuario);
  }

  public obtenerUsuario(cedula: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.urlApi}/getUsuario/${cedula}`);
  }

  public update(usuario:UsuarioModel):Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(this.urlApi+'/update',usuario);
  }

  public delete(cedula: string): Observable<UsuarioModel> {
    return this.http.delete<UsuarioModel>(`${this.urlApi}/delete/${cedula}`);
  }
  

  public getEmpresa(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/getEmpresa');
  }

  public getRoles(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/getRoles');
  }


}
