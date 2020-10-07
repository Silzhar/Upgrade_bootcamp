import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactList: Contact[] = [{
    id: 1,
    name: 'Fran',
    phone: 666555444,
  }, {
    id: 2,
    name: 'Cristian',
    phone: 666555444,
  }, {
    id: 3,
    name: 'Alberto',
    phone: 666555444,
  }, {
    id: 4,
    name: 'Mario',
    phone: 666555444,
  }];

  private counter: number = 4;
  constructor() { }

  public getContactList(): Contact[] {
    const contactListCopy: Contact[] = JSON.parse(JSON.stringify(this.contactList));
    return contactListCopy;
  }

  public addContactToList(name: string, phone: number ): Contact[] {
    this.counter++;
    const contact: Contact = {
      id: this.counter,
      name,
      phone,
    };

    this.contactList.push(contact);

    // Hacemos una copia y la devolvemos
    const contactListCopy: Contact[] = this.getContactList();

    return contactListCopy;
  }

  public removeContact(id: number){
    this.contactList = this.contactList.filter((element) => element.id !== id);
  }

  public editContact(id: number, name: string, phone: number){
    const existtinContact: Contact = this.contactList.find((elem) => elem.id === id);
    existtinContact.name = name;
    existtinContact.phone = phone;
  }
}
