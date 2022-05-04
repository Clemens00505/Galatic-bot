
const config = require("../config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity(`Some Games | ${config.version}`, {
        type: "PLAYING"
    });

    //client.user.setActivity(`Some Netflix`, {
    //    type: "WATCHING"
    //});

    //client.user.setActivity(`To some music`, {
    //    type: "LISTENING"
    //});

    //client.user.setActivity(`To some music`, {
    //    type: "STREAMING",
    //    url: "https://www.twitch.tv/routerabfrage"    // You have to use a Twitch link or else it won't work.
    //});
};