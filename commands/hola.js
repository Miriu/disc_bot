module.exports = {
    name : 'hola',
    description:'este comando te dice hola q se yo',
    isCommand:true,
    execute(client, message, args, Discord){
        message.channel.send('hola');
    }
}