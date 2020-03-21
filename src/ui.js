// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const chatButton = document.getElementById("chat");
var selectedChat=null;
var selectedChatId=null;
function showWelcomeMessage(account) {

    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `Welcome ${account.name}`;
    signInButton.nextElementSibling.style.display = 'none';
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());
    if (endpoint === graphConfig.graphChatEndpoint) {

        if (data.value.length < 1) {
            alert("No conversations!")
        } else {
            const tabList = document.getElementById("list-tab");
            const tabContent = document.getElementById("nav-tabContent");

            data.value.map((d, i) => {
                if (i < 10) {
                    const listItem = document.createElement("a");
                    listItem.setAttribute("class", "list-group-item list-group-item-action")
                    listItem.setAttribute("id", "list" + i + "list")
                    listItem.setAttribute("data-toggle", "list")
                    listItem.setAttribute("href", "#list" + i)
                    listItem.setAttribute("role", "tab")
                    listItem.setAttribute("aria-controls", i)
                    listItem.innerHTML = "<b>"+d.from.user.displayName +":</b>"+ d.body.content;
                    tabList.appendChild(listItem)
                }
            });
        }
    }
    
}
