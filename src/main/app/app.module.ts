import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@app/auth/auth.module';

import { AppComponent } from '@app/app.component';
import { RoutesModule } from '@app/routes/routes.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, RoutesModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
