import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// const observableA = new Observable((observer) => {
//   const id = setInterval(() => {
//     observer.next('Hello RxJS');
//     observer.complete();
//   }, 1000);
//   return function unsubscribe() {
//     clearInterval(id);
//   };
// });

//   observableA.subscribe({
//   next: (val) => console.log(val),
//   error: (error) => console.error(error),
//   complete: () => console.log('complete'),
// });

// subscription.add(observable.subscribe(console.log))

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {}
