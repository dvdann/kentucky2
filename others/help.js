const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `help`,
  description: `Gives you an invite`,
  aliases: ["h"],
  cooldown: 3,
  edesc: "Help command!",
  execute(message, args, client) {

    let helpmbed = new MessageEmbed()
      .setAuthor("Bot Music", client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
      .addField("Bot Music Bot List Commands", "this is a list commands Bot Music Bot")
      .addField("Music", "```Filter, Loop, Lyrics, Nowplaying, Pause, Play, Queue, Remove, Resume, Shuffle, Skip, Skipto, Stop, Volume```")
      .setFooter("Listening And Chill!")
      .setColor("RANDOM")
    message.channel.send(helpmbed);
}
};