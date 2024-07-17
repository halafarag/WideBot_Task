import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
const modules = [
  CommonModule,
  MaterialModule,
  RouterModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
];
const components = [HomeComponent, NavbarComponent, MainComponent];
@NgModule({
  declarations: [components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [modules],
  exports: [HomeComponent, ...modules, ...components],
})
export class SharedModule {}
