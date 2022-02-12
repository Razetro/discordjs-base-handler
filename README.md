# 💾 DiscordJS-base-handler

<div align="center">
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
</div>

![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/npm-v.16.13.2-informational?style=flat&logo=npm&logoColor=white&color=6aa6f8)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=razetro.probelmadmin-moderation-bot)

# 💾 ProbelmAdmin-Moderation-Bot
DiscordJS-base-handler is a functional, beginner friendly Discord Modular Bot written in JavaScript. This DiscordJS base handler contains slash commands and commands with prefixes.

# Getting Started
### Requirements
* [**Node.js 16.13.2+**](https://nodejs.org/en/)

#### Example Slash Commands
```js
const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "slashcommand name",
    description: "Type here your description",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {
    },
};
```

#### Example Commands
```js
const { Message, Client } = require("discord.js");

module.exports = {
    name: "Command name",
    aliases: ['your', 'aliases'],

    run: async (client, message, args) => {
    },
};
```

# 📑 Features
- [x] Modular system
- [X] Database Support (MySQL & MongoDB)
- [ ] Web Rest API
- [ ] Log System (paste upload)
- [x] Colored Console
- [ ] Moderation features (kick/ban, mod-log, filter, chat cleanup)
- [ ] Music features (YouTube, SoundCloud, local files, playlists, queues)
- [X] Slash Commands

# 🙏 Thanks to:
### 🧑🏻‍🤝‍🧑🏻 Contributors
* Razetro
### 🚧 Used Open-Source projects
* [discordjs/discord.js](https://github.com/discordjs/discord.js)
* [npmjs/dotenv](https://www.npmjs.com/package/dotenv)
* [npmjs/glob](https://www.npmjs.com/package/glob)
* [mongoosejs](https://mongoosejs.com/docs/)
