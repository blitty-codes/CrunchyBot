const TelegramBot = require('node-telegram-bot-api');
const token = '953937231:AAHlJrhp8Y_X098MX4M3cZPbckOELQHwXug';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/^\/hola/, (msg) => {
    bot.sendMessage(msg.chat.id , `Hola ${msg.from.username}`);
});

bot.onText(/^\/start/, (msg) => {
    bot.sendMessage(msg.chat.id , "Bienvenid@!! aquí estoy para hacer de tu día,\nuna MIERDAAA..... digo.... un gran día :D\n\n usa /help");
});

bot.onText(/\/sticker/, (msg) => {
    const stickers = ['CAADAgAD5gcAApb6EgVgdqDlFwZ93xYE',
        'CAADAgAD2wcAApb6EgUg5mJ5rw9CmRYE',
        'CAADAgADEAADr8ZRGp93zTWe_IunFgQ',
        'CAADAgADBQADr8ZRGpWJICJ8NGY0FgQ',
        'CAADAgADuAkAAnlc4gmn9Hy5dMSutRYE',
        'CAADAgADJgAD9wLID7E-3Uvon6w5FgQ',
        'CAADAgADIAAD9wLID1KiROfjtgxPFgQ',
        'CAADAgADIQAD9wLID5x5ZIVyrNvHFgQ',
        'CAADAgADBQADmL-ADUXD-3pCgBZkFgQ',
        'CAADAgADBAADmL-ADW7vNvm8sjn1FgQ',
        'CAADAgADCQADmL-ADRK8edwuVum2FgQ',
        'CAADAgADDwADmL-ADa3Ih1FEY1UeFgQ',
        'CAADAgADtgkAAnlc4gnGTnKNypclSBYE',
        'CAADAgADEQADwDZPEw2qsw_cHj7lFgQ',
        'CAADAgADBgADwDZPE8fKovSybnB2FgQ',
        'CAADAgADEwADwDZPE6qzh_d_OMqlFgQ',
        'CAADAgADAwADwDZPE6Qp7uZ988B4FgQ',
        'CAADAgADCAADwDZPE29sJgveGptpFgQ',
        'CAADAgADCgADwDZPE_8Nrj7oDv0IFgQ',
        'CAADAgADHwADwDZPE-Q4M_eEUpmSFgQ',
        'CAADAgADDQADr8ZRGj7pvDy3DEgWFgQ'];
    let x = Math.floor(Math.random() * Math.floor(stickers.length));
    bot.sendSticker(msg.chat.id, stickers[x]);
});

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "Los comandos que puedes usar son:\n\t- /start\n\t- /hola\n\t- /sticker\n\t- /anios [año en que naciste]\n\t- /operar [num1][+-/*][num2]");
});

bot.onText(/\/anios (.+)/, (msg) => {
    let date = new Date();
    bot.sendMessage(msg.chat.id, `Tienes ${date.getFullYear()-msg.text.replace("/anios ", "")} años`);
});

bot.onText(/^\/operar (.+)/, (msg, num) => {
    //let op;
    let res;
    let numbers;

    if (num[1].includes('+')){
        //op = '+';
        numbers = num[1].split('+');
        res = parseInt(numbers[0]) + parseInt(numbers[1]);
        console.log(numbers);
    } else if (num[1].includes('-')){
        //op = '-';
        numbers = num[1].split('-');
        res = parseInt(numbers[0]) - parseInt(numbers[1]);
        console.log(numbers);
    } else if (num[1].includes('*')) {
        //op = '+';
        numbers = num[1].split('*');
        res = parseInt(numbers[0]) * parseInt(numbers[1]);
        console.log(numbers);
    } else if (num[1].includes('/')) {
        //op = '-';
        numbers = num[1].split('/');
        res = parseInt(numbers[0]) / parseInt(numbers[1]);
        console.log(numbers);
    }

    /*switch(op) {
        case '+':
            numbers = num[1].split('+');
            res = parseInt(numbers[0]) + parseInt(numbers[1]); 
            console.log(numbers);
            break;
        case '-':
            numbers = num[1].split('-');
            res = parseInt(numbers[0]) - parseInt(numbers[1]);
            break;
        case '*':
            numbers = num[1].split('*');
            res = parseInt(numbers[0]) - parseInt(numbers[1]);
            break;
        case '/':
            numbers = num[1].split('/');
            res = parseInt(numbers[0]) - parseInt(numbers[1]);
            break;
    }*/

    bot.sendMessage(msg.chat.id, `La operación da el resultado: ${res}`);
});

bot.on('message', (msg) => {// en cualquier tipo de mensaje manda esto
    const chatId = msg.chat.id;
    const arr = ["Hmmm...", "Alla voy!!!", "Do not be scared", "Soy *Crunchy* y digo que..."];

    bot.sendMessage(chatId, `${arr[Math.floor(Math.random() * Math.floor(4))]}`);
});