const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let profile = message.member;
  if(args[0] && message.mentions.users.first())
    profile = message.guild.member(message.mentions.users.first());
  else if(args[0])
    return message.channel.send('I can\'t find that user, try tagging them for me :thinking:');

  const userEmbed = new Discord.RichEmbed()
    .setAuthor(profile.user.username, profile.user.avatarURL)
    .setColor('#ed7e55')
    .setThumbnail(profile.user.avatarURL)
    .addField('Username', profile.user.tag, true)
    .addField('User ID', profile.user.id, true)
    .addField('Account Created', new Date(profile.user.createdTimestamp).toLocaleString(), true)
    .addField('Joined Server', new Date(profile.joinedAt).toLocaleString(), true)
    .addField('Roles (' + profile.roles.size + ')', profile.roles.map(r => r).join(' '), true)
  message.channel.send(userEmbed);
}

module.exports.help = {
  name: 'userinfo',
  aliases: ['']
}