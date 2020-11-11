import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {EmailItemComponent} from './components/email-item/email-item.component';
import {PlaceholderComponent} from './components/placeholder/placeholder.component';
import {ResolverService} from './shared/services/resolver.service';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: PlaceholderComponent},
      {path: ':id', component: EmailItemComponent, resolve: {email: ResolverService}},
      {path: 'not-found', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {
}
