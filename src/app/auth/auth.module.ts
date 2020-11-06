import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import {SharedModule} from '../shared/shared.module';
import {NgxMaskModule} from 'ngx-mask';


@NgModule({
  declarations: [SinginComponent, SingupComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        NgxMaskModule.forRoot(),
    ]
})
export class AuthModule { }
