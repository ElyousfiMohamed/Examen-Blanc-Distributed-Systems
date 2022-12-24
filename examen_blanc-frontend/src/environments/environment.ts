// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  radarQueriesBaseUrl:"http://localhost:3003/radar/queries/",
  radarCommandsBaseUrl:"http://localhost:3003/radar/commands/",
  proprietaireQueriesBaseUrl:"http://localhost:3004/proprietaire/queries/",
  proprietaireCommandsBaseUrl:"http://localhost:3004/proprietaire/commands/",
  vehiculeQueriesBaseUrl:"http://localhost:3004/vehicule/queries/",
  vehiculeCommandsBaseUrl:"http://localhost:3004/vehicule/commands/",
  infractionQueriesBaseUrl:"http://localhost:3005/infraction/queries/",
  infractionCommandsBaseUrl:"http://localhost:3005/infraction/commands/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
