import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/main/environments/environment';
import { LogoutComponent } from './logout/logout.component';
import { RoutesModule } from '../routes/routes.module';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.fireBase),
    RoutesModule,
  ],
  providers: [],
  exports: [LoginComponent, LogoutComponent],
})
export class AuthModule {}
