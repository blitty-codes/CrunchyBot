const TelegramBot = require('node-telegram-bot-api');
const token = '953937231:AAHlJrhp8Y_X098MX4M3cZPbckOELQHwXug';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/^\/hola/, (msg) => {
    bot.sendMessage(msg.chat.id , `Hola ${msg.from.username}`);
});

bot.onText(/^\/start/, (msg) => {
    bot.sendMessage(msg.chat.id , "Bienvenid@!! aquí estoy para hacer de tu día,\nuna MIERDAAA..... digo.... un gran día :D\n\n usa /help");
});

bot.onText(/\/sticker (.+)/, (msg, emoji) => {
    const chatId = msg.chat.id;
    console.log(getStickerSet(emoji[1]));
    bot.sendMessage(chatId, emoji[1]);//emoji[1]);
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "Los comandos que puedes usar son:\n\t- /start\n\t- /hola\n\t- /sticker [emoji]*\n\t- /anios [año en que naciste]\n\n* -> En proceso");
});

bot.onText(/\/anios (.+)/, (msg) => {
    let date = new Date();
    bot.sendMessage(msg.chat.id, `Tienes ${date.getFullYear()-msg.text.replace("/anios ", "")} años`);
});

bot.onText(/^\/suma (.+)/, (msg, num) => {
    //console.log(msg);
    //console.log(num);

    let op;
    let res;
    let numbers;

    //console.log(num[1]);
    //console.log(num[1].includes('+'));
    
    if (num[1].includes('+')){
        op = '+';
    } else if (num[1].includes('-')){
        op = '-';
    }

    
    switch(op) {
        case '+':
            numbers = num[1].split('+');
            res = parseInt(numbers[0]) + parseInt(numbers[1]); 
            console.log(numbers);
            break;
        case '-':
            numbers = num[1].split('-');
            res = parseInt(numbers[0]) - parseInt(numbers[1]);
            break;
    }

    bot.sendMessage(msg.chat.id, `La operación da el resultado: ${res}`);
});

bot.on('message', (msg) => {// en cualquier tipo de mensaje manda esto
    const chatId = msg.chat.id;
    const arr = ["Hmmm...", "Alla voy!!!", "Do not be scared", "Soy *Crunchy* y digo que..."];

    bot.sendMessage(chatId, `${arr[Math.floor(Math.random() * Math.floor(4))]}`);
});