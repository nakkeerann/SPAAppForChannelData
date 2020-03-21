// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
function callMSGraph(endpoint, accessToken, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", "application/json")

  const options = {
    method: "GET",
    headers: headers
  };

  console.log('request made to Graph API at: ' + new Date().toString());

  fetch(endpoint, options)
    .then(response =>
      response.json())
    .then(response =>
      callback(response, endpoint))
    .catch(error => console.log(error))
}


function chat() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(tokenRequest)
      .then(response => {
        callMSGraph(graphConfig.graphChatEndpoint, response.accessToken, updateUI);

      }).catch(error => {
        console.log(error);
      });
  }
}
