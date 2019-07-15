const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600369106608324613")
setInterval(function() {
channel.send(`khaled King`);
}, 30)
})

client.login(process.env.BOT_TOKEN);