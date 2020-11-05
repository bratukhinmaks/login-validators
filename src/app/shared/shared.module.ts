import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';


const components = [
 InputComponent
]
const moduls = [
  CommonModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [...components],
  imports: [
    ...moduls
  ],
  exports: [
    ...components,
    ...moduls
  ]
})
export class SharedModule { }
