import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


// interface para que te mande a un componente extra, si aún no tienes authorization
interface Desactivar{
  SalirdeRuta:()=>Observable<boolean>|boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CanDesactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: Desactivar
  ){
    return component.SalirdeRuta?component.SalirdeRuta():true;
  }

}
