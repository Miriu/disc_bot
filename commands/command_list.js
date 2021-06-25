module.exports = {
    name:'command_list',
    description:'te da todos los comandos y una descripcion de cada uno',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4d88ff')
        .setTitle('Comandos')
        
        for (let command of client.commands.keys()){
            // console.log(client.commands.get(command).description)
            if (command !== 'command_list') newEmbed.addField(`!${command}`,client.commands.get(command).description);
        }
        
        // client.commands.keys().forEach(command => {
        //     if (command !== 'command_list') newEmbed.addField(`!${command}`,client.commands.get(command).description)
        // })
        
        // console.log(descArr);
        message.channel.send(newEmbed);
    }
}