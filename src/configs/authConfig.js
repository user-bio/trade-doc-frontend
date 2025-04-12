// export const msalConfig = {
//   auth: {
//     clientId: "bcb98145-16d8-4bc3-93f3-9a768c35c7b1",
//     authority: "https://login.microsoftonline.com/834b7c70-3687-4751-aa2e-ef3bed9f9d25", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//     redirectUri: "https://bioseta.s3digital.com.br/login",
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   }
// };

// export const msalConfig = {
//   auth: {
//     clientId: "13b51e74-e98f-4a39-a119-444cf0dd87da",
//     authority: "https://login.microsoftonline.com/834b7c70-3687-4751-aa2e-ef3bed9f9d25", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//     redirectUri: "http://localhost:3000/login",
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   }
// };

// export const msalConfig = {
//   auth: {
//     clientId: "dae6249a-1986-4b99-9c5b-5919948b730b",
//     authority: "https://login.microsoftonline.com/834b7c70-3687-4751-aa2e-ef3bed9f9d25", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//     redirectUri: "https://tradedochomologacao.bioseta.com.br/login",
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   }
// };


// export const msalConfig = {
//   auth: {
//     clientId: "dae6249a-1986-4b99-9c5b-5919948b730b",
//     authority: "https://login.microsoftonline.com/834b7c70-3687-4751-aa2e-ef3bed9f9d25", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
//     redirectUri: "https://tradedochomologacao.bioseta.com.br/login",
//   },
//   cache: {
//     cacheLocation: "localStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   }
// };


export const msalConfig = {
  auth: {
    clientId: "f22d5fc7-ad7c-49b6-baee-599522c1a6f7",
    authority: "https://login.microsoftonline.com/834b7c70-3687-4751-aa2e-ef3bed9f9d25", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://tradedoc.bioseta.com.br/login",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["user.read", "mail.send"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };