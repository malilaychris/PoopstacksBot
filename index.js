const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir('./commands/', (error, files) => {
	if(error) console.error(error);
	let commandFiles = files.filter(f => f.split('.').pop() === 'js');
	console.log(`${files.length} commands being loaded...`);

	commandFiles.forEach((f, i) => {
		const command = require(`./commands/${f}`);
		console.log(`${f} loaded.`);
		bot.commands.set(command.help.name, command);
	});
});

bot.on('ready', () => {
	console.log(`${bot.user.username} is connected.`);
});

bot.on('message', async message => {
	if(message.author.bot || message.content.indexOf(prefix) != 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const commandName = args.shift().toLowerCase();
	const command = bot.commands.get(commandName) ||
		bot.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

	//if(!command) return message.channel.send('Sorry, I can\'t find that command :thinking:');
	
	command.run(bot, message, args);
	console.log(`${message.author.username} used command '${commandName}'`);
});

bot.login(token);