// See https://help.sap.com/doc/38ec5403bfbf4d7a8fdd3fee5f9605e0/3.0.14/en-US/d3671ac3ce334a18a67bd1dd1eb6435f.html
fiori_client_appConfig = {
    "appID": "com.sap.CIExample",
    "fioriURL": "https://url-to-your-launchpad:port",
    "fioriURLIsSMP": false,
    "certificate": "",
    "autoSelectSingleCert": false,
    "multiUser":"false",
    "proxyID":"appConnectProxy",
    "proxyURL":"https://vpn.abc.net",
    "proxyExceptionList":["vpn.abc.net"],
    "passcodePolicy":  {
          "expirationDays":"0",
          "hasDigits":"false",
          "hasLowerCaseLetters":"false",
          "hasSpecialLetters":"false",
          "hasUpperCaseLetters":"false",
          "defaultAllowed":"true",
          "lockTimeout":"300",
          "minLength":"8",
          "minUniqueChars":"0",
          "retryLimit":"10"
          
     },
    "keysize": "",
    "idpLogonURL": ""
};
