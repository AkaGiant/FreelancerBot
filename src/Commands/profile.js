const FreelancerSchema = require('$Schemas/FreelancerSchema');
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'profile',
    description: 'Get a freelancers profile',
    category: 'Management',
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    execute(interaction, client) {
        FreelancerSchema.findOne({ freelancerId: interaction.user.id, guildId: interaction.guild.id },
            async (err, data) => {
                if (err) throw err;
                if (data) {
                    const embed = new MessageEmbed()
                    embed.setColor('GREEN')
                    embed.setTitle(`${interaction.user.tag}`)
                    embed.addField("id", `${data.freelancerId}`)
                    embed.addField("guildId", `${data.guildId}`)
                    embed.addField("paypal", `${data.data.paypal}`)

                    interaction.reply({ embeds: [embed]})
                }
            })
    }
}