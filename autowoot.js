API.chatLog("Cookie Loaded"); 
API.on(API.ADVANCE, aw); /* autowoot */
API.on(API.ADVANCE, lol); /* ahoj */

/* autowoot */
function aw(){ 
	$("#woot").click(); 
}
/* ahoj */
API.on(API.CHAT, a); function a(b){ if(b.message == "ahoj"){ API.sendChat("ahoj"); } }
}
