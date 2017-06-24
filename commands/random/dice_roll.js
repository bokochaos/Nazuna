const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'random',
            description: 'Rolls a die',
            examples: ['roll']
        });
    }
    async run(message, args){
        var roll = Math.floor(Math.random()*6)+1;
        message.reply("You rolled a "+ roll);
    }
}

module.exports = DiceRollCommand;