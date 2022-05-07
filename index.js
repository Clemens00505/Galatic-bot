const Discord = require("discord.js");
const client = new Discord.Client();

const Enmap = require("enmap");

const config = require("./config.json");
client.config = config;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

["command", "event"].forEach(handler => {
  require(`./Handlers/${handler}`)(client);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled promise rejection:", error);
});

client.login(config.token || process.env.TOKEN);
