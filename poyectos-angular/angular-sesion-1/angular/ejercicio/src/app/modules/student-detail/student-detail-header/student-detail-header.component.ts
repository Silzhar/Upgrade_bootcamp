import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail-header',
  templateUrl: './student-detail-header.component.html',
  styleUrls: ['./student-detail-header.component.scss']
})
export class StudentDetailHeaderComponent implements OnInit {
  title: string;

  constructor() {
   }

  ngOnInit(): void {
    this.title = 'Cabecera de alumnos';
    console.log(this.title);
  }

}
