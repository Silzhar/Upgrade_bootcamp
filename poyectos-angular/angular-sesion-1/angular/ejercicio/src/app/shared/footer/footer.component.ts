import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title: string;
  constructor() { 
    this.title = 'FOOTER';
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log(this.title);
  }

}
