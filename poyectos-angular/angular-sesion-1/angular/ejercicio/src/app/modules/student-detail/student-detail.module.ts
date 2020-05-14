import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailHeaderComponent } from './student-detail-header/student-detail-header.component';


@NgModule({
  declarations: [StudentDetailHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StudentDetailHeaderComponent,   // Prueba de export, comprobar
  ]
})
export class StudentDetailModule { }
