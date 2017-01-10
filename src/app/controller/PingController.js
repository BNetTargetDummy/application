/* Just brainstorm */

function(bot, message, suffix) {
    message.channel.sendMessage( message.author + " pong!");
    if(suffix){
        message.channel.sendMessage( "Invalid Argument!");
    }
}