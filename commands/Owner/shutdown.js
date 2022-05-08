const config = require('../../config.json');


module.exports = {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    category: "Owner",
    usage: `${config.prefix}shutdown`,

    run: async(client, message, args) => {

        if (message.member.id != config.owner) return false;
        
        else await message.channel.send(`👍 Bot is Shutting Down !!`)
        client.destroy();
    }
}