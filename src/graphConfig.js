  // Add here the endpoints for MS Graph API services you would like to use.
  const graphConfig = {
    graphChatEndpoint: "https://graph.microsoft.com/beta/teams/{TEAMSID}/channels/<ChannelID>/messages"
  };

  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
      scopes: ["Mail.ReadWrite","ChannelMessage.Edit"]
  };