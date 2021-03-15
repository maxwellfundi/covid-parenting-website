// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pdfBaseUrl: 'http://storage.googleapis.com/covid-website-pdfs1/assets/tip_sheets/',
  firebase:{
    apiKey: "AIzaSyBJIeV9UxQhAW2wUAP9dPcM07fk-2VxR54",
    authDomain: "covid-parenting-website.firebaseapp.com",
    projectId: "covid-parenting-website",
    storageBucket: "covid-parenting-website.appspot.com",
    messagingSenderId: "769605278563",
    appId: "1:769605278563:web:3b630c27d45dc7a1e95156",
    measurementId: "G-TFV33J5330"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
