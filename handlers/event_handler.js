const fs = require('fs');

module.exports = (client, Discord) => {
    const loadDir = (dirs) => {
        const eventsFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
  
        for (let file of eventsFiles){
            const event = require(`../events/${dirs}/${file}`)
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => loadDir(e));
}  