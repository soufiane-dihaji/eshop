import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [SharedModule, RouterModule.forChild([])],
  exports: [NavbarComponent],
})
export class CoreModule {}
