import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { MainComponent } from './main/main.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailItemComponent } from './email-item/email-item.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [MainComponent, EmailListComponent, EmailItemComponent, EmailCreateComponent, EmailReplyComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule {}
