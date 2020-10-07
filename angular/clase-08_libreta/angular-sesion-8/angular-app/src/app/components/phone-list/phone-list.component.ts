import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts/contacts.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {
  public contactList: Contact[] = [];
  public newContactFormGroup: FormGroup = null;
  public editContactFormGroup: FormGroup = null;
  public idEdited: number = 0;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    // Pedimos la lista de contactos
    this.updateContactList();

    // Creamos un formulario para dar de alta nuevos contactos
    this.newContactFormGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  public onNewContactSubmit() {
    if (this.newContactFormGroup.invalid) {
      alert('Revisa el formulario...');
    } else {
      const name: string = this.newContactFormGroup.get('name').value;
      const phone: number = this.newContactFormGroup.get('phone').value;
      this.contactsService.addContactToList(name, phone);
      this.updateContactList();
      this.newContactFormGroup.reset();
    }
  }

  public updateContactList() {
    this.contactList = this.contactsService.getContactList();
  }

  public editContact(id: number, name: string, phone: number) {
    // this.titulo = 'Editar contacto:';
    this.idEdited = id;
    this.editContactFormGroup = new FormGroup({
      name: new FormControl(name, Validators.required),
      phone: new FormControl(phone, Validators.required),
    });
  }

  public onEditContactSubmit(){
    const editname: string = this.editContactFormGroup.get('name').value;
    const editphone: number = this.editContactFormGroup.get('phone').value;
    this.contactsService.editContact(this.idEdited, editname, editphone);
    this.updateContactList();
    this.editContactFormGroup.reset();
    this.ngOnInit();
   }


  public removeContact(id: number) {
    this.contactsService.removeContact(id);
    this.updateContactList();
  }


}
