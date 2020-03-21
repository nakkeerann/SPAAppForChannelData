 
  // Config object to be passed to Msal on creation
  const msalConfig = {
    auth: {
      clientId: "{AZURE AD APP ID}",
      authority: "https://login.microsoftonline.com/common/",
      redirectUri: "{https://{AZUREAPP}.azurewebsites.net}",
      navigateToLoginRequestUrl: false
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
      forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new
    }
  };  
  
  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"],
  };
