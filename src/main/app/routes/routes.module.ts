import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/auth/login/login.component';
import { LogoutComponent } from '@app/auth/logout/logout.component';
import { IdeaComponent } from '@app/dashboard/idea/idea.component';
import { LayoutComponent } from '@app/dashboard/layout/layout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'ideas',
    component: LayoutComponent,
    children: [{ path: '', component: IdeaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
