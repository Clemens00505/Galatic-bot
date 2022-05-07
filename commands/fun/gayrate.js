const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {

    name: "gayrate",
    category: "Fun",
    description: "Gives the gayrate of the user !!",
    aliases: ["howgay"],
    example: `${config.prefix}gayrate @Clemens`,

    run: async (client, message, args) => {

        const user =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const gayrate = Math.floor(Math.random() * 101)

        if(!user)
        return message.reply(`❌ Provide a valid user from this guild !!`)

        const embed = new Discord.MessageEmbed()
        .setTitle(`🌈 Gayrate !!`)
        .setDescription(`${user} (\`${user.user.tag}\`) is ${gayrate} % gay !! 🌈`)
        .setTimestamp()

        message.channel.send(embed)
    }
}