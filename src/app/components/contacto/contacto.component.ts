import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {


  firstName="";
  lastName="";
  userName="";
  password="";

  enviado=false;


  EnviarMensaje(){
    alert("Mensaje: " + this.firstName + this.lastName + ": registrado");
    this.enviado=true;
    this.firstName="";
    this.lastName="";
    this.userName="";
    this.password="";
  }

  SalirDeRuta():Observable<boolean>|boolean{
    if((!this.firstName && !this.lastName && !this.userName  && !this.password) ||this.enviado){
      return true;
    }
    return confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
  }

}
