import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentListComponent } from './student-list.component';
import { StudentListHeaderComponent } from './student-list-header/student-list-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentListComponent, StudentListHeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StudentListComponent,
  ],
})
export class StudentListModule { }
