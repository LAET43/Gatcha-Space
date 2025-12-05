const { Client, GatewayIntentBits, Collection, EmbedBuilder } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection();
client.events = new Collection();

['commands', 'events'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.includes('خرا')) {
        message.delete();
        message.channel.send('**الاحترام واجب ممنوع السب**');
    }
});

client.login(TOKEN);
