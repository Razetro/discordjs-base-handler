const { Client, SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js")

module.exports = {
    ...new SlashCommandBuilder()
        .setName("echo")
        .setDescription("echo your message")
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription("message that you want to echo")
                .setRequired(true)
        )
        .addUserOption((option) =>
            option
                .setName("target")
                .setDescription("message to be sent to")
                .setRequired(false)
        ),

    run: async (client, interaction, args) => {
        const messageToSend = interaction.options.getString("message");
        const user = interaction.options.getUser("target");
        if(user) {
            user.send({ content: messageToSend });
            interaction.followUp({
                content: `I sent the message to ${user.tag}`,
            });
        } else {
            interaction.followUp({ content: messageToSend });
        }
    },
};