API.chatLog("Cookie Loaded"); 
API.on(API.ADVANCE, aw); /* autowoot */
API.on(API.CHAT, lol);  /* lemon */
API.on(API.CHAT, lol);  /* ahoj */
API.on(API.CHAT, lol);  /* čau */
API.on(API.CHAT, lol);  /* čus */


/* autowoot */
function aw(){ 
	$("#woot").click(); 
}


/* lemon */
function lol(a){ var me = API.getUser().id; var msg = a.message; var from = a.uid; if(me != from){ if(msg.toLowerCase().indexOf("lemon") > -1){ API.sendChat(":lemon:Lemon HYPE:lemon:"); } } }

/* ahoj */
function lol(a){ var me = API.getUser().id; var msg = a.message; var from = a.uid; if(me != from){ if(msg.toLowerCase().indexOf("ahoj") > -1){ API.sendChat("Ahoj :yum:") < 0); } } }

/* čau */
function lol(a){ var me = API.getUser().id; var msg = a.message; var from = a.uid; if(me != from){ if(msg.toLowerCase().indexOf("čau") > -1){ API.sendChat("Ahoj :yum:") < 0); } } }

/* čus */
function lol(a){ var me = API.getUser().id; var msg = a.message; var from = a.uid; if(me != from){ if(msg.toLowerCase().indexOf("čus") > -1){ API.sendChat("Ahoj :yum:") < 0); } } }
