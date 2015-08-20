

API.chatLog("Cookie Loaded");
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
        if (msg.toLowerCase().indexOf("napiš lemon") > -1) {
            API.sendChat(":lemon:Lemon HYPE:lemon:");
        }
        if (msg.toLowerCase().indexOf("napiš ahoj") > -1 || msg.toLowerCase().indexOf("napiš čau") > -1 || msg.toLowerCase().indexOf("napiš čus") > -1 ) {
             API.sendChat("Ahoj :yum:");
        }
        if (msg.toLowerCase().indexOf("napiš pravidla") > -1) {
             API.sendChat("Nespamovat | Nedělat reklamy | Nežádat o funkci | Chovat se a psát slušně | Nevhodná hudba/video = skip | Příliš mehů = skip | Max. délka 10 min.");
        }
    }
}
