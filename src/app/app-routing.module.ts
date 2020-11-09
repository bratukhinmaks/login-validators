import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
      {path: 'inbox', loadChildren: () => import('./inbox/inbox.module').then((m) => m.InboxModule), canLoad: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
