const util  = require("minecraft-server-util");


module.exports = (Discord, client, message) => {
    console.log('El bot esta listo');
    var players = [];
    var old_players = [];
    var n_errors = 0

    setInterval(() => {
        util.status('batatas.club', {port:25575}).then(response => {
                        
                        players = response.samplePlayers.map(e => e.name);
                        if (players.length !== old_players.length && players.length > 0){
                            
                            n_errors=0
                            const newEmbed3 = new Discord.MessageEmbed()
                            .setColor('#2AD245')
                            .addField('Jugadores conectados', players);
                            client.channels.cache.find(channel => channel.id === '848995738393772032').send(newEmbed3);
                           
                            
                        }

                        else if (players.length !== old_players.length && players.length === 0){
                            client.channels.cache.find(channel => channel.id === '848995738393772032').send('No hay jugadores conectados');   
                        }
                        old_players = response.samplePlayers.map(e => e.name);
        })
        .catch(error => {
            if (n_errors===0){
            client.channels.cache.find(channel => channel.id === '848995738393772032').send('No hay jugadores conectados, o el server no esta prendido o es un error');    
            n_errors++; }
        })
    }, 1000)
    // setInterval(() => {
    //     if (!isOpen){
    //         util.status('Faccionesdegordos.aternos.me', {port: 53092}).then(response => {
    //             const newEmbed = new Discord.MessageEmbed()
    //             .setColor('#2AD245')
    //             .setTitle('El server de minecraft esta abierto')
    //             client.channels.cache.find(channel => channel.id === '834086933931884606').send(newEmbed);
    //             isOpen=true;
    //             n_errors = 0;
    //             console.log(response.samplePlayers.map(e => e.name));
    //         })
    //         .catch((error) => {})
    //     }
    //     else if (isOpen){
    //         util.status('Faccionesdegordos.aternos.me', {port: 53092}).then(response => {
    //             // n_errors = 0;  
    //             // players = response.samplePlayers.map(e => e.name);
    //             // if (players.length !== old_players.length){
    //             //     players.forEach(e => console.log(e));
    //             //     const newEmbed3 = new Discord.MessageEmbed()
    //             //     .setColor('#2AD245')
    //             //     .addField('Jugadores conectados', players);
    //             //     client.channels.cache.find(channel => channel.id === '834086933931884606').send(newEmbed3);
    //             // }
    //             // old_players = response.samplePlayers.map(e => e.name);
    //         })
    //         .catch((error) => {
    //             n_errors++;
    //             if (n_errors>10){
    //                 isOpen=false;
    //                 const newEmbed2 = new Discord.MessageEmbed()
    //                 .setColor('#D41717')
    //                 .setTitle('El server de minecraft se a cerrado')
    //                 client.channels.cache.find(channel => channel.id === '834086933931884606').send(newEmbed2);
    //             }       
    //         })
    //     }
    // }, 10000)
}