

API.chatLog(":ballot_box_with_check: Cookie Loaded v1.2.3");
API.on(API.ADVANCE, aw); /* autowoot */
API.on(API.CHAT, lol); /* lemon */
 
 
/* autowoot */
 
function aw() {
    $("#woot").click();
}
 
 
/* lemon */
 
function lol(a) {
    var me = API.getUser().id;
    var msg = a.message;
    var from = a.uid;
    if (me != from) {
        if (msg.toLowerCase().indexOf("cookie lemon") > -1) {
            API.sendChat(":lemon:Lemon HYPE:lemon:");
        }
        if (msg.toLowerCase().indexOf("cookie ahoj") > -1 || msg.toLowerCase().indexOf("cookie čau") > -1 || msg.toLowerCase().indexOf("cookie čus") > -1 ) {
             API.sendChat("Ahoj :yum:");
        }
        if (msg.toLowerCase().indexOf("proč?") > -1 || msg.toLowerCase().indexOf("proč") > -1 || msg.toLowerCase().indexOf("A proč?") > -1 ) {
             API.sendChat("Protože.. PROTO!");
        }
        if (msg.toLowerCase().indexOf("mám tě rád") > -1 || msg.toLowerCase().indexOf("miluji tě") > -1 || msg.toLowerCase().indexOf("nesnáším tě") > -1 ) {
             API.sendChat("Já tebe taky :heart_decoration:");
        }
        if (msg.toLowerCase().indexOf("si holka") > -1 || msg.toLowerCase().indexOf("dáme sex") > -1 || msg.toLowerCase().indexOf("si bot") > -1 ) {
             API.sendChat("To je ve hvězdách");
        }
            if (msg.toLowerCase().indexOf("cookie :D") > -1) {
            API.sendChat("Nesměj se mi :(");
        }
    }
}
