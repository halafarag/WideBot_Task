import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [UserListComponent, UserDetailsComponent],
})
export class UsersModule {}
