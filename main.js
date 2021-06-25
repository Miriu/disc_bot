const Discord = require('discord.js');
const client = new Discord.Client()

client.commands = new Discord.Collection();
client.events = new Discord.Collection();



['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})



client.login('ODQwMjQ3Nzc4MDE3MTQ4OTQ4.YJVbuQ.EUpoFZBKy0E697hlsvWLJc0CcQ8');








// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for (const file of commandFiles){
//     const command = require(`./commands/${file}`);
//     const descObj = {}

//     descObj['!' + command.name] = command['description'];

//     client.commands.set(command.name, command)
//     descArr.push(descObj);
// }


// client.once('ready', ()=> {
//     console.log('El bot esta online');
//     console.log(client.commands);
// });

// client.on('message', message=>{
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLocaleLowerCase();

//     if (command === 'ping'){
//         client.commands.get('ping').execute(message, args, Discord);
//     }


//     else if (command === 'holabot'){
//         message.channel.send('!hola, soy un pedazo de mierda que no quiere hacer lo que tiene que hacer');
//     }

//     else if (command === 'hola'){
//         client.commands.get('hola').execute(message, args, Discord);
//     }

//     else if (command === 'desc'){
//         client.commands.get('desc').execute(message, args, Discord, descArr);
//     }

//     else{
//         message.channel.send('Perdon, el command enviado no es correcto. Por favor, deje de ser tan pelotudo y haga las cosas bien tarado.');
//     }
// });