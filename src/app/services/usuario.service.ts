import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Aquí podemos crear variables:
  usuarios: any[] = [];

  constructor() { }

//aquí vamos a crear toda nuestra lógica de programación
//DAO:
public createUsuario(usuario:any){}

public getUsuario(rut:string){}

public getUsuarios(){}

public updateUsuario(rut:string, nuevoUsuario:any){}

public deleteUsuario(rut:string){}

}
