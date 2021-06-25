var Scraper = require('images-scraper');
const { execute } = require('./mcserver');
const ytdl = require('ytdl-core');
const { VoiceChannel } = require('discord.js');


const google = new Scraper({
    puppeteer: {
        headless : true
    }
})

module.exports = {
    name:'vivaperon',
    description:'viva Peron la puta madre',
    text: 'peron',
    async execute(client, message, args){
        const imageQuery = 'Peron';
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Tenes que estar en un canal de voz para poder ejecutar este comando');


        const imageResults = await google.scrape(imageQuery, 300);
        for (let i =0; i<imageResults.length; i++){
            message.channel.send(imageResults[i].url)
        }


        const connection = await voiceChannel.join()
         const stream = ytdl('https://www.youtube.com/watch?v=ogyRbEEH0es', {filter:'audioonly'});
        //const stream = ytdl('https://www.youtube.com/watch?v=CkS0siTFbMY', {filter:'audioonly'});
        connection.play(stream, {seek:0,volume:3})
        .on('finish', () =>{
            voiceChannel.leave()
        })
    }
}