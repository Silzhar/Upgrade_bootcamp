import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'BOTON';
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log(this.title);
  }

}
