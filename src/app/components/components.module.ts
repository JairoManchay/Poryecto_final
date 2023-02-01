import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { AdvertenciaComponent } from './advertencia/advertencia.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    MenuComponent,
    UsersComponent,
    ContactoComponent,
    HomeComponent,
    AdvertenciaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ImageModule,
    
  ],
  exports:[
    MenuComponent,
    UsersComponent,
    ContactoComponent,
    HomeComponent,
    AdvertenciaComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }
