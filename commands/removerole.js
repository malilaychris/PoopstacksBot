//const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.delete(10000).catch();
  const roleReq = args.join(' ').toLowerCase();
  const role = message.guild.roles.find(r => r.name.toLowerCase() === roleReq);
  if(!roleReq)
    message.channel.send('You didn\'t specify a role :thinking:').then(msg => msg.delete(15000));
  else if(!role)
    message.channel.send('Sorry, I can\'t find the role you wanted :thinking:').then(msg => msg.delete(15000));
  message.member.removeRole(role);
  message.channel.send(`Your \`${role.name}\` role has been removed.`).then(msg => msg.delete(15000));
}

module.exports.help = {
  name: 'removerole',
  aliases: ['remrole', 'deleterole', 'delrole']
}