const config = require('../../config.json');

module.exports = {
    name: "restart",
    aliases: ["herlaad"],
    description: "restarts the bot !!",
    category: "Owner",
    example: `${config.prefix}restart`,

    run: async(client, message, args) => {
        
        if (message.member.id != config.owner) return false;
        
        else await message.channel.send(`👍 Bot is Restarting!!`)
        client.destroy();
        client.login(config.token);
        message.channel.send(`👍 Bot has been restarted!!`)
    }
}