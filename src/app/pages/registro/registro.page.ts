import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //AQUI PODEMOS CREAR VARIABLES
  persona = new FormGroup({
    rut : new FormControl('',[Validators.minLength(9),Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre : new FormControl('',[Validators.required, Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    tiene_equipo : new FormControl('no',[Validators.required]),
    nombre_equipo : new FormControl('',[])
  });

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];




  constructor(private router : Router) { }

  ngOnInit() {
  }

  // Podemos crear métodos
  public registrar(): void{
    //validaciones? llamar un DAO? conversion?
    console.log(this.persona.value);
    alert("Registrado");
    this.router.navigate(['/login'])

  }

  /*public habilitar_boton():boolean{
    if(this.persona.valid){
      return false;
    }
    return true;
  }*/

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  //INVESTIGAR FECHA NACIMIENTO

}
