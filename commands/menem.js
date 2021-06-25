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
    name:'menem',
    description:'se muroi menem y por eso se separo dft punk',
    text:'menem',
    async execute(client, message, args, Discord){
        const imageQuery = 'Daft Punk';
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Tenes que estar en un canal de voz para poder ejecutar este comando');
        const imageResults = await google.scrape(imageQuery, 10);
        for (let i =0; i<imageResults.length; i++){
            message.channel.send(imageResults[i].url)
        }

        var daftArr = ['https://www.youtube.com/watch?v=a5uQMwRMHcs', 'https://www.youtube.com/watch?v=FGBhQbmPwH8', 'https://www.youtube.com/watch?v=5NV6Rdv1a3I', 'https://www.youtube.com/watch?v=NF-kLy44Hls', 'https://www.youtube.com/watch?v=zhl-Cs1-sG4', 'https://www.youtube.com/watch?v=dwDns8x3Jb4']

        const connection = await voiceChannel.join()
        const stream = ytdl(daftArr[Math.floor(Math.random()*daftArr.length)], {filter:'audioonly'});
        //const stream = ytdl('https://www.youtube.com/watch?v=CkS0siTFbMY', {filter:'audioonly'});
        connection.play(stream, {seek:0,volume:1})
        .on('finish', () =>{
            voiceChannel.leave()
        })  
    }
}