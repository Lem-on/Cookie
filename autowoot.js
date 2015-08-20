API.chatLog("Cookie Loaded"); 
API.on(API.ADVANCE, aw); /* autowoot */

/* autowoot */
function aw(){ 
	$("#woot").click(); 
}

   // Example code for a bot command:
        bot.commands.streamCommand = {
            command: 'lemon',  // The command to be called. With the standard command literal this would be: !stream
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat(":lemon: Lemon HYPE :lemon:");
                }
              }

