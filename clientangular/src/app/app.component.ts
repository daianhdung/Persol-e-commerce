import { Component, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from './services/storageService/cookie.service';
import { TrackIpService } from './services/trackipService/track-ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Persol';

  constructor(
    private spinner: NgxSpinnerService,
    private trackIpService: TrackIpService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    const newVisitorKey =
      '$2a$10$rIGqLQIOCHWHh95Kvs4te.Q4drx4H5Nmunakg9MDL5zYA1IYhb2NG';
    const cookieVisitor = this.cookieService.get('visitor')
    if (!cookieVisitor || cookieVisitor != newVisitorKey) {
      this.cookieService.setCookieNoExpired('visitor', newVisitorKey);
      this.trackIpService.getIpUser().subscribe({
        next: (response) => {
          this.trackIpService.newVisitor(response).subscribe({
            next: (responseVisit) => console.log(responseVisit),
            error: (error) => console.log(error),
          });
        },
        error: (error) => console.log(error),
      });
    }

    
  }

  @HostListener('window:unload', ['$event'])
  onUnload(event: Event) {
    let pageReloaded = window.performance
                 .getEntriesByType('navigation')
                 .map((nav) => (nav as any).type)
                 .includes('reload');
    console.log(pageReloaded);
    if (this.cookieService.get('visitor') && !pageReloaded) {
      this.cookieService.remove('visitor');
    }
    console.log('User is leaving the page');
  }
}
