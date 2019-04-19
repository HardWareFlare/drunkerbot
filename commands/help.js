const Discord = require('discord.js'); //Load Discord library and create a new client
//"!db help
exports.run = (client, message, [mention, ...reason]) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Drunkerbot Help")
        .addField("!#ping", "Ping the bot")
        .addField("!#roll", "Random number between 1 and 20")
        .addField("!#start <url>", "Start a drunkerbox stream and link to the provided <url>")
        .addField("!#stop", "Stop and clear the drunkerbox")
        .addField("!#status", "Display summary of the currently running drunkerbox stream")
        .addField("!#dbase", "Display stats about the DrunkerBoxes database")
        .addField("!#about", "Display stats about drunkerbot")
        .addField("!#git", "Links to Drunkerboxes related Git Repos")
        .addField("!#alerts", "Toggle alerts for DrunkerBoxes for yourself")
        .addField("!#api", "Drunkerbot API information")
        .addField("!#karma", "Check your or <mention>\'s Karma breakdown")
        .addField("!#whois <mention>", "Check your or <mention>\'s Player Card\'")
        .addField("!#top10", "Top 10 in messages sent in the current channel")
        .addField("!#sell <quantity> <USD price> \"<Name>\" \"<Description>\"", "Sell a thing! *(must use double quotes!)*")
        .addField("!#buy <item ID> <quantity>", "Send a purchase order tothe seller.")
        .addField("!#catalogue", "List what's for sale and find the item IDs")
        .addField("!#status <item ID> <available/unavailable>", "Change the status of an item you are selling.");
    message.channel.send({
        embed
    });
}