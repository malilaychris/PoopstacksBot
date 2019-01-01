//const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send('Sorry, you don\'t have permission to do that.');

  let amount = parseInt(args[0]);
  if(!amount)
    return message.channel.send('You didn\'t give me a number of messages to purge :thinking:');
  message.channel.bulkDelete(amount + 1).catch();
  /*
  const purgeEmbed = new Discord.RichEmbed()
    .setDescription(`Purged \`${amount}\` messages.`)
    .setColor('#ed7e55')
  message.channel.send(purgeEmbed).then(msg => msg.delete(5000));
  */
  message.channel.send(`Purged \`${amount}\` messages.`).then(msg => msg.delete(15000).catch());
}

module.exports.help = {
  name: 'purge',
  aliases: [''],
}