/* Just brainstorm */

function(bot, message, suffix) {
    message.channel.sendMessage(version);
    if(suffix){
        message.channel.sendMessage( "Invalid Argument!");
    }
}