// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client();

// Constant Variables
const prefix = '_'; // This is customizable, so change it to your own likings.
const ownerID = ''; // Change the numbers into your own ID.

// Listener Events
client.on('message', message => {
  // Will run when bot has access to channels

  // Variables
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  // Two variables, cmd contains the command following the prefix.
  // args contains it.

  // Return Statements
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Command Handler
  try {

    // Auto-reload (OPTIONAL: MOVE TO IT'S OWN COMMAND)
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);

  } catch (e) { // error catcher

  }

});

// Ready Event
client.on('ready', () => console.log('Launched!'));

// Discord Login -- Change it to your token at http://discordapp.com/developers/applications/me
client.login("CHANGE THIS TO YOUR TOKEN")
