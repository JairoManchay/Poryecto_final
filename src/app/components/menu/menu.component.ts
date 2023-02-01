import { Component } from '@angular/core';
import { AuthenticacionService } from 'src/app/services/authenticacion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  usuariologueado = false;

  constructor(public autenticacion: AuthenticacionService){}

  ngOnInit(): void {
    // Acá le podemos a donde nos llevará despues de registrarnos
    this.usuariologueado = this.autenticacion.isLogeado('');
    this.autenticacion.cambioLogStatusSujeto.subscribe(
      (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
  }

  logout(){
    this.autenticacion.logout();
  }
}
