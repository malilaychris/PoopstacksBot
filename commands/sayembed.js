const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const sayMessage = args.join(' ');
  const sayEmbed = new Discord.RichEmbed()
    .setDescription(sayMessage)
    .setColor('#ed7e55')
  message.channel.send(sayEmbed);
}

module.exports.help = {
  name: 'sayembed',
  aliases: ['']
}