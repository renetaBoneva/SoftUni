import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// // Promise demo
// const p = new Promise(res => {
//   res(1000)
// })
// p.then(console.log)

// // Observable
// const o$ = new Observable<number>(obs => {
//   obs.next(10)
//   obs.next(20)
//   obs.next(30)

//   obs.error(new Error('Very bad error'));

//   return () => {
//     // cleanup
//   }
// })
// o$.pipe(map((num: number) => num++)).subscribe({ 
//   next: console.log ,
//   error: (err) => console.error(`Error from observable: ${err.message}`),
//   complete: () => console.log('Observable completed!')

// })

// function interval(delay: number, count?: number) {
//   let counter = 0;
//   return new Observable(obs => {
//     const i = setInterval(() => {
//       if (count == counter) {
//         obs.complete();
//       } else {
//         obs.next(counter++)
//       }
//     }, delay)

//     return () => {
//       clearInterval(i)
//     }
//   })
// }

// interval(1000, 3).subscribe({
//   next: console.log,
//   error: (err) => console.error(`Error from observable: ${err.message}`),
//   complete: () => console.log('Observable completed!')
// })


// SUBJECTS
// const subj$$ = new Subject();
// subj$$.subscribe(console.log); // A
// subj$$.next(100); // A
// subj$$.subscribe(console.log); // B
// subj$$.subscribe(console.log); // C
// subj$$.next(200); // A, B, C

// setTimeout(() => {
//   subj$$.subscribe(console.log); // D
//   subj$$.next(300); // A, B, C, D

//   setTimeout(() => {
//     subj$$.subscribe(console.log); // E
//     subj$$.next(400); // A, B, C, D, E
//   }, 2000)
// }, 2000)
// subj$$.next(500); // A, B, C
// subj$$.next(600); // A, B, C
// subj$$.next(700); // A, B, C
// subj$$.next(800); // A, B, C

// BEHAVIOR SUBJECT
// const bSubj$$ = new BehaviorSubject(1);
// bSubj$$.subscribe((d) => console.log('Sub 1: ', d))
// bSubj$$.next(2)
// bSubj$$.next(3)
// bSubj$$.subscribe((d) => console.log('Sub 2: ', d))
// bSubj$$.next(4)
// bSubj$$.subscribe((d) => console.log('Sub 3: ', d))
// bSubj$$.next(5)
// bSubj$$.next(6)
// bSubj$$.subscribe((d) => console.log('Sub 4: ', d))

// Replay subjects
// const rSubj$$ = new ReplaySubject(10); // set queue length
// rSubj$$.next(1000);
// rSubj$$.subscribe((d) => console.log(`Sub 1: ${d}`))

// for (let i = 1; i <= 30; i++) {
//   rSubj$$.next(i);
// }

// console.log('------');
// rSubj$$.subscribe((d) => console.log(`Sub 2: ${d}`))


// ASYNC SUBJECTS
const aSubj$$ = new AsyncSubject();
// aSubj$$.next(1);
// aSubj$$.next(2);
// aSubj$$.subscribe((d) => console.log(`Sub 1: ${d}`))
// aSubj$$.next(3);
// aSubj$$.next(4);
// aSubj$$.subscribe((d) => console.log(`Sub 2: ${d}`))
// aSubj$$.complete(); // must complete subject