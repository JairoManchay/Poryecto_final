import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsersComponent } from './components/users/users.component';
import { CanDesactivateGuard } from './can-desactivate.guard';
import { CanActivateGuard } from './can-activate.guard';
import { LoginComponent } from './components/login/login.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'advertencia', component: AdvertenciaComponent },
  {path: 'home', component: HomeComponent, canActivate:[CanActivateGuard]},
  {path: 'contacto', component: ContactoComponent, canDeactivate:[CanDesactivateGuard], canActivate: [CanActivateGuard]},
  {path: 'usuario', component: UsersComponent, canActivate:[CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
