const Discord = require('discord.js'); //Load Discord library and create a new client

const config = require('../modules/config.js');

exports.run = (discordClient, message, args) => {
    var statusdesc = "\n" + config.urlWEB + "\nFor a human-readable event stream status on your browser!\n";
    statusdesc += "\nAPI default endpoint is " + config.urlAPI + "\n";
    statusdesc += "\nEndpoints currently include:\n";
    var embed = new Discord.MessageEmbed()
        .setTitle("Event API")
        .addField("Details:", statusdesc)
        .addField("/bot", "*GET*: Bot details")
        .addField("/ping", "*GET*: Pong!")
        .addField("/roll", "*GET*: random number between 1 and 20")
        .addField("/guild", "*GET*: List guilds that the bot uses")
        .addField("/guild/<guild ID>/top10/<channel ID>", "*GET*: Top 10 posters in this channel of that server")
        .addField("/guild/<guild ID>/status/", "*GET*: Live stream (event) status of that server")
        .addField("/guild/<guild ID>/whois/<user ID>", "*GET*: Playercard data of user on that server")
    message.channel.send({
        embed
    });
}
