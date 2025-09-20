import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/template/header/header.component';
import { NavComponent } from './app/components/template/nav/nav.component';
import { HomeComponent } from './app/pages/home/home.component';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    MatSidenavContent,
    MatCardModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
