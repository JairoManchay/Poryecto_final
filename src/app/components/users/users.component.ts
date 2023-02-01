import { Component } from '@angular/core';
import { UserAllService } from 'src/app/services/user-all.service';
import { UserTs } from '../../models/user-ts';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private apiUser: UserAllService){}

  listadoData:UserTs[]=[]
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiUser.getAllUser().subscribe({
      next:(user: UserTs[])=>{
        this.listadoData=user;
      }
    })
  }
}
