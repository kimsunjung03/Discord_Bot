// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');
 
// Create an instance of a Discord client
const client = new Client();
 
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content.startsWith('r.help')) {
    msg.reply('Powered by node.js\nMade by M4ndU');
  }
 
  if (msg.content === 'r.whoami') {
    // Send the user's avatar URL
    msg.reply(msg.author.avatarURL);
  }
});
 
client.login('Nzg1NDQwMzk3NTM1MDg0NTY1.X834Xw.OwV-qU_NDgvNmyxX8KxaQFXUjro');
 
