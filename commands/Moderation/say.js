const config = require('../../config.json');
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["tell", "embed"],
  category: "Moderation",
  description: "Send message with bot in embed",
  usage: `${config.prefix}say [message]`,

  run: async (client, message, args) => {

    const perms = ["ADMINISTRATOR"]

    if (!message.member.hasPermission(perms)) {
        return message.reply(`❌ You can't send text with the bot.. since you don't have permission to do it ask admin or owner to give you permission **\`ADMINISTRATOR\`** !!`)
        .then(msg => {
            msg.delete({ timeout: 15000 })
          })
    }

    const Embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("#ff2050")
    message.delete()
    message.channel.send(Embed)
  },
};