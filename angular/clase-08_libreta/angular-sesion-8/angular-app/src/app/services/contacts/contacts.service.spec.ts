import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import { Contact } from 'src/app/models/contact';


describe('ContactsService', () => {
  let service: ContactsService;
  let fakeContacts: Contact[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsService);

    fakeContacts = [{
      id: 432,
      name: 'Test 1',
      phone: 111
    }, {
      id: 476,
      name: 'Test 2',
      phone: 222
    }];
  });

   // @ts-ignore
  service.contactList = fakeContacts;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getContactList should return the contact list', () => {
    // @ts-ignore
    // service.contactList = fakeContacts;

    expect(service.getContactList()).toEqual(fakeContacts);
  });

  it('saveNewContact should save the contact in the list', () => {
    // @ts-ignore
    service.counter = 100;
    const fakeContact: Contact = {
      id: 101,
      name: 'Fake',
      phone: 123123123
    };
    service.addContactToList(fakeContact.name, fakeContact.phone);

    // @ts-ignore
    expect(service.contactList).toContain(fakeContact);
  });

  it('removeContact sould delete the contact from list', () => {

    // @ts-ignore
    // service.contactList = fakeContacts;
    service.removeContact(432);
    // @ts-ignore
    expect(service.contactList).toEqual([{
      id: 476,
      name: 'Test 2',
      phone: 222
    }]);
  });

  it('modifiedContact sould modified the contact from list', () => {
    // @ts-ignore
    // service.contactList = fakeContacts;
    service.editContact(2, 'name test', 9995935);
    // @ts-ignore
    expect(service.contactList).toEqual([{
      id: 432,
      name: 'Test 1',
      phone: 111
    }, {
      id: 476,
      name: 'Test 2',
      phone: 222
    }]);
  });
});
