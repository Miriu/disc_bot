module.exports = {
    name: 'server_link',
    description:'Devuelve el link del server para abrirlo manualmente porque hacrlo de forma automatica esta siendo un problema un tanto grande, captcha y la concha de tu madre puta. Este comando solo puede ser usado por admins, porque la contra del server la tienen ellos.',
    execute(client, message, args, Discord){
        message.channel.send('https://aternos.org/server/')
    }
}