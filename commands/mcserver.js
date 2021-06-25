const util  = require("minecraft-server-util")

module.exports = {
    name:'mcserver',
    description:'te dice si el server esta prendido y la cantidad de jugadores',
    execute(client, message, args, Discord){
        util.status('batatas.club', {port:25575})
        .then(response => {
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#4d88ff')
            .setTitle('MC Server')
            // .setImage(response.favicon)
            .addField('Online Player', response.onlinePlayers)
            .addField('Server Status', 'Online')
            .addField('Version', response.version)
            .addField('Jugadores conectados', response.samplePlayers.map(e => e.name));
            
            console.log(JSON.stringify((response)))
            message.channel.send(newEmbed);
            console.log(response)
         })
         .catch((error) => {
            message.channel.send('El server esta cerradisimo, pero nunca vi un server tan cerrado la concha de mi madre, puta madre que esta cerrado el server')
            console.log(response.onlinePlayers)
        })
    }
}

