const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://rusa2485.herokuapp.com',
    token = process.env.TOKEN || '825153873:AAGuQZdr_eNz42121j7yC3bEl12-lErm6b8',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message',(msg)=>{
const chatId=msg.chat.id;
    if(msg.text=='hai'|| msg.text=='hello'){
        bot.sendMessage(chatId,'hello');}
    else if(msg.text=='how r u'){
        bot.sendMessage(chatId,'fine')}
});
