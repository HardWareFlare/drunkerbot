const Discord = require('discord.js'); //Load Discord library and create a new client
const moment = require('moment'); //Handling datestamps and time formats
const sqlite3 = require('sqlite3'); //Interfaces with sqlite3 database
const db = new sqlite3.Database('data/botbase.db');

//Custom Modules
const logger = require('../modules/log.js');

exports.run = (discordClient, message, args) => {
    db.get("SELECT * FROM STREAM WHERE state = 1;", function(err, results) {
        var embed = new Discord.RichEmbed();
        if (results != undefined) {
            var statusdesc = "Host: " + results.hostname + "\n Time started: " + moment.unix(results.start).format("MMM DD, hh:mm");
            embed.setImage(results.userAvatar);
            if (results.url != "none")
                statusdesc += "\n Link: " + results.url;
        } else {
            var statusdesc = "No drunkerbox is currently live";
        }
        embed.addField("Drunkerbox Status", statusdesc)
            .setColor('BROWN');
        message.channel.send({
            embed
        });
    });
}
