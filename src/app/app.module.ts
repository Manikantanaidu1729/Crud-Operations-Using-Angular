import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router';
import { route } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MobileService } from './mobile.service';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule
  ],
  providers:[UsersService,MobileService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }