
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    let embed = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setColor("#ff2050")
        .addField("Bot Latency", `${message.createdTimestamp - message.createdTimestamp}ms`, true)
        .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
        .setTimestamp()
        .setFooter(`© 2022 Clemens`);
    await message.channel.send(embed);
};

module.exports.help = {
    name: "ping"
};