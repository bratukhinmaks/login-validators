import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {EmailItemComponent} from './email-item/email-item.component';
import {PlaceholderComponent} from './placeholder/placeholder.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: ':id', component: EmailItemComponent},
      {path: '', component: PlaceholderComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {
}
