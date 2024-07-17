import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LoginComponent],
  imports: [SharedModule, ErrorMessageComponent],
})
export class AuthModule {}
