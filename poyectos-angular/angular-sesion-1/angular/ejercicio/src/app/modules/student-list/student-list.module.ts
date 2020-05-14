import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListComponent } from './student-list.component';
import { StudentListHeaderComponent } from './student-list-header/student-list-header.component';

@NgModule({
  declarations: [StudentListComponent, StudentListHeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    StudentListComponent,
  ],
})
export class StudentListModule { }
