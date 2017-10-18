var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/smile.png' />");
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/sad.png' />");
    chatStr = chatStr.replace(":'(", "<img class='emoji' src='img/cry.png' />");
    chatStr = chatStr.replace(":D", "<img class='emoji' src='img/happy.png' />");
    chatStr = chatStr.replace("-_-", "<img class='emoji' src='img/straight.png' />");
    chatStr = chatStr.replace("cake", "<img class='emoji' src='img/cake.png' />");
    chatStr = chatStr.replace("lol","laugh out loud");
    chatStr = chatStr.replace("omg","oh my god");
    chatStr = chatStr.replace("ttyl","talk to you later");
}

/* ---------- p1Chat ---------- */
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    replaceEmojis();
}

/* ---------- p2Chat ---------- */
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    replaceEmojis();
}

/* ---------- chatDisplay ---------- */
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    if (chatNum == 1){
        ndiv.style.backgroundColor = "white";
        ndiv.style.textAlign = "left";
        ndiv.style.borderRadius = "15px";
        ndiv.style.border = "2px solid #AEA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "white";
        ndiv.style.textAlign = "right";
        ndiv.style.borderRadius = "15px";
        ndiv.style.border = "2px solid #A8F";
    }
    
    ndiv.style.position = "relative";
    ndiv.style.padding = "10px";
    ndiv.className = "col-3";
    ndiv.style.left = "0px";
    ndiv.style.right = "0px";
    ndiv.style.margin = "auto";
    ndiv.style.marginBottom = "3px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}

/* ---------- Interactions ---------- */
document.getElementById("p1Input").addEventListener("keyup",
function(ev){
    if(ev.keyCode == 13){
        changeChatStr(1);
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup",
function(ev){
    if(ev.keyCode == 13){
        changeChatStr2(2);
        createChat(2);
    }
});
