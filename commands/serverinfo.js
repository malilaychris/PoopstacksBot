const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const serverEmbed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor('#ed7e55')
    .setThumbnail(message.guild.iconURL)
    .addField('Server Name', message.guild.name, true)
    .addField('Server ID', message.guild.id, true)
    .addField('Server Created', new Date(message.guild.createdTimestamp).toLocaleString(), true)
    .addField('Owner', message.guild.owner.user.tag, true)
    .addField('Region', message.guild.region, true)
    .addField('Members', message.guild.memberCount, true)
    .addField('Channels', message.guild.channels.size, true)
    .addField('Roles', message.guild.roles.size, true)
  message.channel.send(serverEmbed);
};

module.exports.help = {
  name: 'serverinfo',
  aliases: [''],
}