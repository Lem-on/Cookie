API.chatLog("Cookie Loaded"); 
API.on(API.ADVANCE, aw); /* autowoot */
API.on(API.CHAT, lol);  /* lemon */

/* autowoot */
function aw(){ 
	$("#woot").click(); 
}


/* lemon */
function lol(a){ var me = API.getUser().id; var msg = a.message; var from = a.uid; if(me != from){ if(msg.toLowerCase().indexOf("lemon") > -1){ API.sendChat("Lemon HYPE"); } } }
