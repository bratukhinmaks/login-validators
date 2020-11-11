import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { MainComponent } from './main/main.component';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailItemComponent } from './components/email-item/email-item.component';
import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailReplyComponent } from './components/email-reply/email-reply.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [MainComponent, EmailListComponent, EmailItemComponent, EmailCreateComponent, EmailReplyComponent, PlaceholderComponent, NotFoundComponent],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule {}
