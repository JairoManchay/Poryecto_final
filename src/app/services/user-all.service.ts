import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserTs } from '../models/user-ts';

@Injectable({
  providedIn: 'root'
})
export class UserAllService {

  constructor(private http: HttpClient) { }

  getAllUser():Observable<UserTs[]>{
    const apiDatos = environment.apiUrl + 'users/';
    return this.http.get<UserTs[]>(apiDatos);
  }
}
