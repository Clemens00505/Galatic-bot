
const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Get list of all command and even get to know every command detials",
    usage: "ping",
    category: "info",

run: async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setColor("#ff2050")
        .addField("Bot Latency", `${message.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
        .setTimestamp()
        .setFooter(`© 2022 Clemens`);
        await message.channel.send(embed);
    }
};

