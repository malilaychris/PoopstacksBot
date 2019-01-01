//const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete(10000).catch();
  const roleReq = args.join(' ').toLowerCase();
  const role = message.guild.roles.find(r => r.name.toLowerCase() === roleReq);
  if(!roleReq)
    return message.channel.send('You didn\'t specify a role :thinking:').then(msg => msg.delete(15000));
  else if(!role)
    return message.channel.send('Sorry, I can\'t find the role you wanted :thinking:').then(msg => msg.delete(15000));
  else if(role === message.member.roles.find(r => r.name.toLowerCase() === roleReq))
    return message.channel.send('You already have this role :thinking:').then(msg => msg.delete(15000));
  message.member.addRole(role);
  message.channel.send(`You've been given the \`${role.name}\` role.`).then(msg => msg.delete(15000));
  /*
  const roleEmbed = new Discord.RichEmbed()
    .setDescription(`You've been given the \`@${role.name}\` role.`)
    .setColor('#ed7e55')
  message.channel.send(roleEmbed);
  */
  //message.delete(5000).catch();
}

module.exports.help = {
  name: 'addrole',
  aliases: ['']
}