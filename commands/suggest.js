const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your poll",
  category: "info",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion for your poll")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "💹│polls" || x.name === "💹│polls"))
    
    
    if(!channel) {
      return message.channel.send("Er is geen kanaal met de naam - 💹│polls")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggestie: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sended Your poll to " + channel)
    
  }
}