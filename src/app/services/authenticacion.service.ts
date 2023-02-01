import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticacionService {

  constructor() { }

  readonly estaLogeado = 'Logeado';
  public urlUsuarioIntentandoAcceder = '';

  public cambioLogStatusSujeto = new Subject<boolean>();
  public cambioLogStatus$ = this.cambioLogStatusSujeto.asObservable();

  // Funcion para el logeo
  login(){
    localStorage.setItem(this.estaLogeado, 'true');
    this.cambioLogStatusSujeto.next(true);
  }

  logout(){
    localStorage.removeItem(this.estaLogeado);
    this.cambioLogStatusSujeto.next(false);
  }

  isLogeado(url: string){
    const logeado = localStorage.getItem(this.estaLogeado);
    if(!logeado){
      this.urlUsuarioIntentandoAcceder=url;
      return false;
    }
    return true;
  }
}
