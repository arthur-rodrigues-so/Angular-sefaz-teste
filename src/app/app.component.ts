import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
  RouterOutlet, RouterLink, LayoutModule,
  MatSidenavModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatListModule,
  MatMenuModule, MatBadgeModule, MatTooltipModule
]

})
export class AppComponent {
  isHandset = false;
  opened = true;
  topbarHeight = 0;

  constructor(bp: BreakpointObserver) {
    bp.observe([Breakpoints.Handset, Breakpoints.Tablet]).subscribe(r => {
      this.isHandset = r.matches;
      this.opened = !r.matches;
    });
  }

  toggle(sidenav: any) { sidenav.toggle(); }
  closeIfMobile(sidenav: any) { if (this.isHandset) sidenav.close(); }
}