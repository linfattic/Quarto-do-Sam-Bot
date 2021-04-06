const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "s.";
client.config = {
    TOKEN: 'coloque o token aqui',
    prefix: "!r",
    cooldown: 15000
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === (prefix + "ping") ) {
    msg.reply("pong");
  }
})
client.on('message', message => {
    if (message.content.startsWith(prefix + 'say')) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("**" + SayMessage + "**")
        message.channel.send("- " + `**${message.author}**`)
    }
});

client.login(client.config.TOKEN);