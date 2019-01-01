module.exports.run = async (bot, message, args) => {
  const sayMessage = args.join(' ');
  message.channel.send(sayMessage);
}

module.exports.help = {
  name: 'say',
  aliases: ['']
}