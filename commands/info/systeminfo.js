const Discord = require('discord.js');
const config = require('../../config.json');
const { mem, cpu } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const { re } = require('mathjs');

module.exports = {
    name: "systeminfo",
    aliases: ["systemstats", "system", "systeminformation"],
    category: "Info",
    description: "Gives my system information",
    example: `${config.Prefix}systeminfo`,

    run: async(client, message, args) => {

        const { totalMemMb, usedMemMb } = await mem.info();

        const systeminfo = stripIndent`
        CPU       : ${cpu.model()}
        Cores     : ${cpu.count()}
        CPU Usage : ${await cpu.usage()} %
        RAM       : ${totalMemMb} MB
        RAM Usage : ${usedMemMb} MB 
        `;

        const embed = new Discord.MessageEmbed()
        .setTitle(`System information`)
        .setDescription(`\`\`\`yaml\n${systeminfo}\`\`\``)
        .setTimestamp()
        .setColor("#ff2050")

        message.channel.send(embed)
    }
}