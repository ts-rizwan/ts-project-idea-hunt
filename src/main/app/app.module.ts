import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@app/auth/auth.module';

import { AppComponent } from '@app/app.component';
import { RoutesModule } from '@app/routes/routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, RoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
