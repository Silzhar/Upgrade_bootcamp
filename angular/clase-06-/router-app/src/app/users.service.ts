import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { relative } from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userList: User[] = [
    {
      id: 1,
      name: 'Jose',
      email: 'jose@jose.es'
    },
    {
      id: 2,
      name: 'Pedro',
      email: 'pedro@pedro.es'

    },
    {
      id: 3,
      name: 'Laura',
      email: 'laura@laura.es'

    }
  ];

  public userListSecond: User[] = [
    {
      id: 1,
      name: 'Pablo',
      email: 'pablo@jose.es'
    },
    {
      id: 2,
      name: 'Sara',
      email: 'sara@pedro.es'

    },
    {
      id: 3,
      name: 'Maite',
      email: 'maite@laura.es'

    }
  ];
  constructor() { }

  public getUsers(): Observable<User[]> {

    const observable: Observable<User[]> = new Observable(subscriber => {
      subscriber.next(this.userList);

      setTimeout(() => {
        subscriber.next(this.userListSecond);
        subscriber.complete();
      }, 1000);
    });

    return observable;
  }

  // Recibe id de usuario y detalle
  public getDetailUser(id: number): User {
    return this.userList.find((elemento) => elemento.id === id);
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
}
