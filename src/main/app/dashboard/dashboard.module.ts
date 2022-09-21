import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RoutesModule } from '@app/routes/routes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { IdeaComponent } from './idea/idea.component';



@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MenuComponent,
    IdeaComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
  ]
})
export class DashboardModule { }
