const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str);
}

function pluck(array){
    return array.map(function(item) {return item["name"];});
}

function hasRole(mem, role){
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}

client.on('ready', () => {
    console.log('Nazuna is online!')
});


// Search on wiki

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    var i;
    var longName = "";

    if (commandIs("wiki", message)){
        if (args.length === 1){
            message.channel.send('What do you want to look for? ^^. Usage: `!wiki [search term]`');
        } else if (args.length === 2){
                if (args[1] === 'Mizell' || args[1 === 'mizell']){
                    message.channel.send('Oh, it looks like you made a typo. Don\'t worry I got you! ^^ http://terrabattle.wikia.com/wiki/Nazuna');
                } else {
                    if (args[1].charAt(args[1].length-1) === '^') {
                        
                        args[1].slice(0,-1);
                        message.channel.send('http://terrabattle.wikia.com/wiki/'+ args[1].charAt(0).toUpperCase()+args[1].slice(1,-1).toLowerCase()+'_Λ');
                        
                    } else {
                    message.channel.send('http://terrabattle.wikia.com/wiki/'+ args[1].charAt(0).toUpperCase()+args[1].slice(1).toLowerCase());
                }    
            }
        } else {
                longName = args[1].charAt(0).toUpperCase()+args[1].slice(1).toLowerCase()
            for (i=2; i<args.length; i++){
                longName += "_"+args[i].charAt(0).toUpperCase()+args[i].slice(1).toLowerCase();     
                }
              message.channel.send('http://terrabattle.wikia.com/wiki/'+ longName); 
        }        
    }
    if (commandIs("recode", message)){
        message.channel.send('http://terrabattle.wikia.com/wiki/'+ args[1].charAt(0).toUpperCase()+args[1].slice(1).toLowerCase()+'_Λ');
    }
    if (commandIs("tbcompendium", message)){
        message.channel.send('http://tbc.silverdb.it');
    }
    if (commandIs("tbstats", message)){
        message.channel.send('http://tbs.desile.fr/#/quick-start');
    }
    if (commandIs("chapter", message)){
        var chop ="";
        chop = args[0].substring(1);    
        message.channel.send('http://terrabattle.wikia.com/wiki/'+chop.charAt(0).toUpperCase()+chop.slice(1).toLowerCase()+'_'+args[1]+'#'+args[1]+'.'+args[2]);
    }


    if(commandIs("role", message)){
        let role = message.guild.roles.find("name",'Owner');
        let member = message.guild.member(message.author);
        member.addRole (role).catch(console.error);
    }
        // client.on('guildRole', guild =>{
        // if (args.length === 2){
        //     message.channel.send('You got the role '+args[1]);
        //     guild.member(message.author).addRole(args[1]).catch(Error => console.log(Error));    
        //     } else {
        //         message.channel.send('Error');
        //     }
        // })

});

// client.on('guildRole', guild =>{
//     var args = message.content.split(/[ ]+/);
//         if (args.length === 2){
//             message.channel.send('You got the role '+args[1]);
//             guild.member(message.author).addRole(args[1]).catch(Error => console.log(Error));    
              
//         } else {
//             message.channel.send('Error');
//         }
//     });


client.login('MzE1MDk5NzM5MjM2NDY2Njg4.DABzFw.IY645yPll5xS3HPLb4Cn1Epzngw');