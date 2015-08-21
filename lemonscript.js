

API.chatLog(":ballot_box_with_check: Cookie:tm: Loaded v1.2.2");
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
        if (msg.toLowerCase().indexOf("lemon") > -1) {
            API.sendChat(":lemon:Lemon HYPE:lemon:");
        }
        if (msg.toLowerCase().indexOf("Cookie ahoj") > -1 || msg.toLowerCase().indexOf("Cookie čau") > -1 || msg.toLowerCase().indexOf("Cookie čus") > -1 ) {
             API.sendChat("Ahoj :yum:");
        }
    }
}
