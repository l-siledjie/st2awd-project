import * as msal from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.VUE_APP_MICROSOFT_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.VUE_APP_MICROSOFT_TENANT_ID}`,
    redirectUri: "http://localhost:8080",
  },
};

export const msalInstance = new msal.PublicClientApplication(msalConfig);
