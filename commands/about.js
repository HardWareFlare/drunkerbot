const Discord = require('discord.js'); //Load Discord library and create a new client
const moment = require('moment'); //Handling datestamps and time formats
const sqlite3 = require('sqlite3'); //Interfaces with sqlite3 database
const db = new sqlite3.Database('data/botbase.db');

//Custom Modules
const logger = require('../modules/log.js');
const settings = require('../modules/settings.js');

exports.help = {
    description: "Shows information about this bot.",
    usage: settings.prefix + "about",
    docs: "https://github.com/SuperMechaCow/drunkerbot/blob/master/commands/about.js"
}

exports.run = (discordClient, message, args) => {
	db.get("SELECT * FROM t_botstats;", function(err, results) {
		if (err) {
			logger.error(err)
		} else {
			if (results != undefined) {
				var statusdesc = "App Version: " + results.appver + "\n";
				statusdesc += "Times Started: " + results.restarts + "\n";
				statusdesc += "Last Started: " + moment.unix(results.laststart).format('M/D/YY HH:mm') + "\n";
				statusdesc += "Web Hits: " + results.webhits + "\n";
				var embed = new Discord.MessageEmbed()
				embed.addField("Drunkerbot Stats", statusdesc);
				message.channel.send({
					embed
				});
			} else {
				logger.error("Um... No messages table in database? Weird.")
			}
		}
	});
}
