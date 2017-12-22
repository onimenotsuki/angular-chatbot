// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow: {
    angularBot: '8bae111177264b018647e31b772ba9a4'
  },
  apiUrl: 'http://alephzero-api-dev.us-west-2.elasticbeanstalk.com/api',
  firebase: {
    apiKey: 'AIzaSyBi6SpjTw9PJPOKkjYsJEXPVQXbBqR-DUE',
    authDomain: 'firechat-350ed.firebaseapp.com',
    databaseURL: 'https://firechat-350ed.firebaseio.com',
    projectId: 'firechat-350ed',
    storageBucket: 'firechat-350ed.appspot.com',
    messagingSenderId: '321548219234'
  },
  mailchimp: {
    listId: '25397f9883',
    instance: 'us14',
    apiKey: '1b2026725fba48db7f9746b114280cef-us14',
    user: 'alephzeroad',
  }
};
