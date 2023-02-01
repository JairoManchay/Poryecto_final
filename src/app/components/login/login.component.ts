import { Component } from '@angular/core';
import { AuthenticacionService } from 'src/app/services/authenticacion.service';
import { Router } from '@angular/router';
import { UserAllService } from '../../services/user-all.service';
import { UserTs } from '../../models/user-ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password='';

  datos: UserTs[]=[];

  hide = true;

  constructor(private authService: AuthenticacionService, private route: Router, private apiUser: UserAllService){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiUser.getAllUser().subscribe({
      next: (datos: UserTs[])=>{
        this.datos = datos;
        console.log(datos);
      }
    })
  }


  mensaje: number=1;
  redireccion='';

  login(){
    if(this.name==""|| this.password==""){
      return;
    }else{
      for(let i=0; i<this.datos.length; i++){
        if(this.name==this.datos[i].email && this.password==this.datos[i].username){
          this.mensaje=1;
          this.authService.login();
          this.redireccion=this.authService.urlUsuarioIntentandoAcceder;
          this.authService.urlUsuarioIntentandoAcceder='';
          this.route.navigate(['/home'])
        }else{
          this.mensaje++;
        }
      }
    }

    console.log(this.mensaje);
    return this.mensaje;
  }

}
