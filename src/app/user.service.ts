import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model'
@Injectable()
export class UserService {
    constructor(private http: HttpClient){}
   public addUser(user: User){
        return this.http.post('http://localhost:3000/users', user)
        .toPromise();
    }
    public getUsers(): Promise<User[]>{
        return this.http.get('http://localhost:3000/users').toPromise() as Promise<User[]>;
    }
}