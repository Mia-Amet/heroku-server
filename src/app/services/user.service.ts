import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/User";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private _updatedUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ this.apiUrl }/users`)
      .pipe(
        map(users => {
          if (!this._updatedUser.value) return users;

          const updated: User[] = users.map(user =>
            user.id === this._updatedUser.value.id ? { ...this._updatedUser.value } : user);
          this._updatedUser.next(null);
          return updated;
        })
      );
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${ this.apiUrl }/users/${ id }`);
  }

  updateUser(user: User): Observable<User> {
    this._updatedUser.next(user);
    return this.http.put<User>(`${ this.apiUrl }/users/${ user.id }`, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete(`${ this.apiUrl }/users/${ id }`)
      .pipe(
        switchMap(res => this.getUsers().pipe(
          map(users => users.filter(user => user.id !== id))
        ))
      );
  }
}
