import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HomeComponent, 
    HeaderComponent, 
    MatSidenavModule, 
    MatButtonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coreyBarrDev';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor( changeDetectorRef: ChangeDetectorRef ,media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
