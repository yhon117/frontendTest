import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi="http://localhost:8080/api/usuario";  
  constructor(private http:HttpClient) { 
    
  }

  public getUsuarios(): Observable<any>{
    return this.http.get<any>(this.urlApi + '/get');
  }

  
}
