// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCcGr9dOnBOdr69O78QBz2zM7NNCi_FFZ4",
    authDomain: "angular-golf-scorecard.firebaseapp.com",
    databaseURL: "https://angular-golf-scorecard.firebaseio.com",
    projectId: "angular-golf-scorecard",
    storageBucket: "angular-golf-scorecard.appspot.com",
    messagingSenderId: "44692305268"
  }
};
