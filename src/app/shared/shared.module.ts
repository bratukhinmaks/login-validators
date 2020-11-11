import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ModalComponent } from './components/modal/modal.component';

const components = [
  InputComponent,
  MainLayoutComponent,
  NavComponent,
  ModalComponent
];
const moduls = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  MatToolbarModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...moduls,
  ],
  exports: [
    ...components,
    ...moduls
  ]
})
export class SharedModule {
}
