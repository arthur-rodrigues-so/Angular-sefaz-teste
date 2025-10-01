import { Component, effect, inject  } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-nav',
  imports: [
    MatSidenav,
    MatSidenavContainer,
    MatListModule,
    MatSidenavContent,
    RouterOutlet,
    RouterLink,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isLargeScreen: boolean = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

}
