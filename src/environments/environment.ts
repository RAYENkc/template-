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

  // filtrage
  getArchiPro : 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/archi/read',
  getActivePro : 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/active/read',
  getProTunis : 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/test/read',
  gettoday: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/filter/day',
  getdate:'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/filter/day/',
  getSopcialResion : 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospect/getsocielResion/',
  getAdress: 'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospect/Address/',
  getMail:'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/prospect/getMail/',

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
  
   
   /**** Client *****/
   createClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/create',
   readIdClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/read/',
   readAllClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/read',
   updateClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/update/',
   deleteClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/delete/',

   /**  GeoLocation Client **/
  createGeoClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/geolocations/read/',
  readIdGeoClient: 'https://us-central1-departement-commercial.cloudfunctions.net/geolocations/read/',
  readAllGeoClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/api/geolocations/read/',
  updateGeoClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/geolocations/update/',
  deleteGeoClient: 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/geolocations/delete/',

  /*****   filtrage  ****/
  getArchiProClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/archi/read',
  getActiveProClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/active/email',
  getDataFirstOrderClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/filter/DataFirstOrder/',
  getDateOfLastOrderClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/filter/DateOfLastOrder/',
  getdateClient :'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/filter/day/',
  getSopcialResionClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/client/getsocielResion/',
  getAdressClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/client/Address/',
  getMailClient :'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/client/getMail/',
  getDayClient : 'https://us-central1-departement-commercial.cloudfunctions.net/clientApi/filter/date',


   /**** Commercial    *****/
   createCommercial: 'https://us-central1-departement-commercial.cloudfunctions.net/commercialApi/api/create',
   readIdCommercial: 'https://us-central1-departement-commercial.cloudfunctions.net/commercialApi/api/read/',
   readAllCommercial: 'https://us-central1-departement-commercial.cloudfunctions.net/commercialApi/api/read',
   updateCommercial: 'https://us-central1-departement-commercial.cloudfunctions.net/commercialApi/api/update/',
   deleteCommercial: 'https://us-central1-departement-commercial.cloudfunctions.net/commercialApi/api/delete/',
   getinfoCommercail: 'http://us-central1-departement-commercial.cloudfunctions.net/commercialApi/info/commercail/',

  /**** Assignment    *****/
      createAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/create',
      readIdAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/read/',
      readAllAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/read',
      updateAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/update/',
      deleteAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/delete/',
      getmy: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/assig/read/my/',
      valideAssignment:'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/valid/',
      refusAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/api/refus/',
      getProspectAssignment: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/assignments/day/',


  // filtrage
  getmyProspect: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/myprospects/read/',
  getprospectToAssig: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/assignment/read',
  getAssig: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/assig/read/',
  getchanged: 'https://us-central1-departement-commercial.cloudfunctions.net/assignmentApi/assig/to',
  

  /*****  chats  *****/
  createChat: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/create',
  readIdChat: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/read/',
  readAllChat: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/read',
  updateChat: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/update/',
  deleteChat: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/delete/',

  /****** messages  *****/
  createMessage: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/messages/',
  readIdMessage: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/chats/messages/',
  readAllMessage: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/chats/messages/',
  updateMessage: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/update/',
  deleteMessage: 'https://us-central1-departement-commercial.cloudfunctions.net/chatApi/api/delete/',

  /***   event  ****/
  createEvent : 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/event/create',
  readEvent : 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/event/read',
  getEventDayClientEvent : 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/events/day/client/',
  getEventDayProspectEvent : 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/events/day/prospect/',
  /****  note ****/
  createNoteEvent : 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/note/create',
  readNoteEvent: 'https://us-central1-departement-commercial.cloudfunctions.net/eventsApi/events/day/',


  /*** email ***/
  sendEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/sendMail',
  createEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/email',
  readIdEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/api/read',
  readAllEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/email/read',
  updateEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/email/update/',
  deleteEmail : 'https://us-central1-departement-commercial.cloudfunctions.net/emailApi/email/delete/',
 
/*** get hist of email ***/
  HistoriqueEmail :'https://us-central1-departement-commercial.cloudfunctions.net/prospectApi/emails/read/hist/',

/******** manger User *****/
getUser : ' https://us-central1-departement-commercial.cloudfunctions.net/userApi/api/user/',

/*****     notification   *****/
createnotif: 'https://us-central1-departement-commercial.cloudfunctions.net/notifApi/api/read/client/notif',


  firebase: {
    apiKey: "AIzaSyCGNvX90B7hAAdT1B3M2mxTMPvcdoqAnEg",
    authDomain: "departement-commercial.firebaseapp.com",
    databaseURL: "https://departement-commercial.firebaseio.com",
    projectId: "departement-commercial",
    storageBucket: "departement-commercial.appspot.com",
    messagingSenderId: "759063668509",
},
  
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
