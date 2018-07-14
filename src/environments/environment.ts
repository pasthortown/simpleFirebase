// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBDeg8yxGDjlBdADyeaq480Ic3K3cXW5vM',
    authDomain: 'simplefire-7d37f.firebaseapp.com',
    databaseURL: 'https://simplefire-7d37f.firebaseio.com',
    projectId: 'simplefire-7d37f',
    storageBucket: 'simplefire-7d37f.appspot.com',
    messagingSenderId: '277620308641'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
