import { Component } from '@angular/core';
import { GeoLocationService } from 'app/services/geolocationService/geo-location.service';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  latitude!: number;
  longitude!: number;
  address!: string;

  time!: string;
  date!: string;
  private clock!: Observable<Date>;
  private clockSubscription!: Subscription;

  constructor(private geolocationService: GeoLocationService) {
    this.clock = interval(1000).pipe(map(() => new Date()));
  }

  ngOnInit() {
    this.clockSubscription = this.clock.subscribe((currentTime) => {
      this.time = currentTime.toLocaleTimeString();
      this.date = currentTime.toLocaleDateString();
    });

    this.geolocationService.getPosition().subscribe(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.geolocationService
          .getAddress(this.latitude, this.longitude)
          .subscribe(
            (response) => {
              console.log(response.Results[0]);
              this.address = response.Results[0].address;
            },
            (error) => console.log(error)
          );
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.clockSubscription.unsubscribe();
  }
}
