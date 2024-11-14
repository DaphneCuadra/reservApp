import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.page.html',
  styleUrls: ['./consumo-api.page.scss'],
})
export class ConsumoApiPage implements OnInit {

  //variable para almacenar la información que consume la API:
  dolar: number = 0;
  datos: any = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.consumirAPI();
    this.consumirDigimons();
  }

  //vamos a crear un método que invoque al método get de la API:
  consumirAPI(){
    this.api.getDatos().subscribe((data:any)=>{
      //console.log(data);
      //console.log(data.dolar);
      //console.log(data.dolar.valor);
      this.dolar = data.dolar.valor;
    });
  }

  consumirDigimons(){
    this.api.getDigimons().subscribe((data:any)=>{
      console.log(data.content);
      this.datos = data.content;
    });
  }


}
