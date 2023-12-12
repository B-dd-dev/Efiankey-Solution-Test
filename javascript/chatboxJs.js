
const SEND_BUTTON = document.querySelector('.send-button');
SEND_BUTTON.addEventListener('click', function() {userInputText();});

function userInputText() {
    let text = document.getElementById('textbox');
    const INPUT_TEXT = text.value;

    if (INPUT_TEXT !== "") {        
        const OUTPUT = 
        "<div class=\"user\">\n" + 
        "   <div>\n" +
        "       <p class=\"sender\">You</p>\n" +
        "       <p class=\"message\">" + INPUT_TEXT + "</p>\n" +
        "       <p class=\"datetime\">" + getDateTime() + "</p>\n" +
        "   </div>\n" +
        "</div>\n";

        let chatbox = document.getElementById("chatbox");
        chatbox.innerHTML = chatbox.innerHTML + OUTPUT;

        setTimeout(function() {
            chatBotReply(INPUT_TEXT, chatbox);
        }, 1000);
    }

    text.value = "";
}

function chatBotReply(text, chatbox) {
    let reply = "";
    console.log(text);
    if (text === "Jamie") {
        reply = "Can I help you?";
    } else if (text.includes("?") && text.includes("!")) {
        reply = "Please give me some time to resolve the issue.";
    } else if (text.includes("?")) {
        reply = "Yes";
    } else if (text.includes("!")) {
        reply = "Please remain calm.";
    } else {
        reply = "Sorry, I don't understand";
    }

    const OUTPUT = 
    "<div class=\"chatbot\">\n" + 
    "   <div>\n" +
    "       <p class=\"sender\">Jamie</p>\n" +
    "       <p class=\"message\">" + reply + "</p>\n" +
    "       <p class=\"datetime\">" + getDateTime() + "</p>\n" +
    "   </div>\n" +
    "</div>\n";

    chatbox.innerHTML = chatbox.innerHTML + OUTPUT;
}

function getDateTime() {
    let dateNow = new Date();
    const DATETIME = dateTimeFormat(dateNow.getDate()) + "/" + dateTimeFormat((dateNow.getMonth() + 1)) + "/" + dateNow.getFullYear() + " " +
                     dateTimeFormat(dateNow.getHours()) + ":" + dateTimeFormat(dateNow.getMinutes()) + ":" + dateTimeFormat(dateNow.getSeconds());
    return DATETIME; 
}

function dateTimeFormat(input) {
    if (input < 10) {
        return "0" + input;
    }
    return input;
}