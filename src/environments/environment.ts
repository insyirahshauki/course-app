// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            apiKey: "AIzaSyBNNdCE-N6ltbNyrL6Z0QLLSswCYp9JGIo",
            authDomain: "courseapp-3aefe.firebaseapp.com",
            projectId: "courseapp-3aefe",
            storageBucket: "courseapp-3aefe.appspot.com",
            messagingSenderId: "102464107908",
            appId: "1:102464107908:web:88e58356eb56d8441419d1"
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/demo',
            handleCodeInApp: true
        }
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
