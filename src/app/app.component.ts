import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
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
    FooterComponent,
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
  
  GITHUB_SVG = '/assets/logos/github/github-mark-white.svg';
  LINKEDIN_SVG = '/assets/logos/linkedin/linkedin.svg';
  ITCH_SVG = '/assets/logos/itch/itchio-logo-textless-white.svg';
  
  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;
  
  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
