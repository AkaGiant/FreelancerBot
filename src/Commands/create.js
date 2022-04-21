const { Client, CommandInteraction } = require('discord.js');

const Freelancer = require('$Schemas/FreelancerSchema');

module.exports = {
    name: 'create',
    description: 'Create a new freelancer',
    category: 'Management',
    options: [
        {
            name: "target",
            description: "Who do you want to set as a freelancer?",
            type: "USER",
            required: true,
        }
    ],
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    
    execute(interaction, client) {

        const { options } = interaction;
        const target = options.getUser("target");
        if (target.bot) return interaction.reply({ content: "The target cannot be a bot!" })

        Freelancer.findOne({ freelancerId: interaction.user.id, guildId: interaction.guild.id },
            async (err, data) => {
                if (err) throw err;
                if (!data) {
                    interaction.reply({ content: "lol2"})
                    data = new Freelancer({
                        freelancerId: interaction.user.id,
                        guildId: interaction.guild.id,
                    })
                    data.save();
                } else {
                    interaction.reply({ content: "This user is already a freelancer!"})
                }

            })
    }
}