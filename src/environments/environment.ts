// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /**  Prospect  **/
  create: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/create',
  readId: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/read/',
  readAll: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/read',
  update: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/update/',
  delete: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/delete/',
  
  /**  GeoLocation **/
  createGeo: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/geolocations/create/',
  readIdGeo: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/geolocations/read/',
  readAllGeo: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/geolocations/read/',
  updateGeo: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/geolocations/update/',
  deleteGeo: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/geolocations/delete/',
 
  /** Notes **/
  createNote: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/notes/create/',
  readIdNote: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/notes/read/',
  readAllNote: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/notes/read/',
  updateNote: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/notes/update/',
  deleteNote: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/notes/delete/',

   /** ProspectManger **/
   createProMang: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/prospectMangers/create/',
   readIdProMang: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospectMangers/read/',
   readAllProMang: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/api/prospectMangers/read/',
   updateProMang: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospectMangers/update/',
   deleteProMang: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospectMangers/delete/',
 
  googleMapsKey: 'AIzaSyCGNvX90B7hAAdT1B3M2mxTMPvcdoqAnEg',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
