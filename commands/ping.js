module.exports = {
    name: 'ping',
    description: 'Te dice pong, es mas que nada para comprobar que el bot funciona.',
    isCommand:true,
    execute(client, message, args, Discord){
        if (message.member.roles.cache.some(r => r.name === 'Admin')){
            message.channel.send('!pong');
        }
        else {
            message.channel.send('No tenes los permisos para hacer esto, jaja re pete.');
        }
    }
}