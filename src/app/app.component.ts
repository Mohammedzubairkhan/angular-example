import { Component } from '@angular/core';
import {User} from './user.model'
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  public user : User;
  users : User[];
  postSuccess : boolean = null;
  constructor(private userservice: UserService){
    this.user = {
      userName:'',
      firstName:'',
      lastName:'',
      password:''
    };
  };

  async addUser(){
    console.log(this.user);
      try{ 
     const res = await this.userservice.addUser(this.user);
    this.postSuccess = true;}
    catch(err){
     this.postSuccess = false;
    }
  }

  async ngOnInit(){
    console.log('init');
    this.users = await this.userservice.getUsers();
    console.log(this.users);
  }
}
