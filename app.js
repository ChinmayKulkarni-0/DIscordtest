
const Discord = require('discord.js');
const token = require("./token.js");
const client = new Discord.Client();

client.on("ready",()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',msg =>{
    if(msg.content == 'ping'){
        msg.reply([
            "Welocome to Aureal ",
            "No download all versions available of Aureal",
            "https://aureal.one/home"
        ])
    }
});
client.login(token);