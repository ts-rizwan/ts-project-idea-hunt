import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RoutesModule } from '@app/routes/routes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { IdeaComponent } from './idea/idea.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/main/environments/environment';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MenuComponent,
    IdeaComponent,
  ],
  imports: [
    CommonModule,
    RoutesModule,
    AngularFireModule.initializeApp(environment.fireBase),
    AngularFirestoreModule,
  ],
})
export class DashboardModule {}
