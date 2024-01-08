require('dotenv').config();
const { Client , IntentsBitField, Integration, EmbedBuilder, ActivityType, Options } = require('discord.js');
const keep_alive = require('./keep_alive')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready' , (c) => {
    console.log('The Bot is Ready.');
});

let status = [
  {
    name: "DINU Streaming",
    type: ActivityType.Watching,
  },
  {
    name: "With DiNu",
    type: ActivityType.Playing,
  },
  {
    name: "YT:DINU Streaming",
    type: ActivityType.Watching,
  },
  {
    name: "Ceylon Roleplay",
    type: ActivityType.Playing,
  },
  {
    name: "With Z4NDER",
    type: ActivityType.Playing,
  },
];

setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);

client.on('ready' , (c) => {
    console.log(`${c.user.username} is Online.✅`);
});

client.login(process.env.TOKEN);