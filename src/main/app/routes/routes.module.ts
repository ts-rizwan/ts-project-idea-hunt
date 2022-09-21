import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/auth/login/login.component';
import { LogoutComponent } from '@app/auth/logout/logout.component';
import { IdeaComponent } from '@app/dashboard/idea/idea.component';
import { LayoutComponent } from '@app/dashboard/layout/layout.component';
import { NavbarComponent } from '@app/dashboard/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: LayoutComponent,
        children:[
          { path: '', component: IdeaComponent},
          { path: 'meeting', component: NavbarComponent}
        ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
