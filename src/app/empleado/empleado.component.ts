import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>eAquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit{

  nombre="Juan";
  
  apellido="Díaz";

  edad=18;

  //empresa="Píldoras Informáticas";

  /*getEdad(){
    return this.edad;
  }*/

habilitacionCuadro=false;

usoRegistrado=false;

getRegistroUsuario(){
  this.usoRegistrado=false;
}

  constructor() {

  }
  ngOnInit(): void {
      
  }

}
