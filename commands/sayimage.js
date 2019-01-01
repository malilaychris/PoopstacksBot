module.exports.run = async (bot, message, args) => {
  const sayImage = args.join('');
  message.channel.send('', {
    file: sayImage
  });
}

module.exports.help = {
  name: 'sayimage',
  aliases: ['']
}