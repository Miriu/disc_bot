const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
var userAgent = require('user-agents');


// const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
// puppeteer.use(
//   RecaptchaPlugin({
//     provider: { id: '2captcha', token: 'XXXXXXX' },
//     visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
//   })
// )

module.exports = {
    name:'open_server',
    desciption:'habre el server',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F203B1')
        .setTitle('El server de minecraft se esta abriendo')
        .addField('El !open_server todavia esta en version beta, que es lo mismo que decir que es una poronga que se puede romper muy muy MUY facilmente. Por favor, no usar este comando a menos de que esten seguros de q el server esta cerrado.', 'Por ahora deberia de funcar.')
        client.channels.cache.find(channel => channel.id === '834086933931884606').send(newEmbed);

            (async () => {
            puppeteer.use(StealthPlugin());    
            const browser = await puppeteer.launch({headless:true});
            const page = await browser.newPage();
            await page.setUserAgent(userAgent.toString())
            
            
            await page.goto('https://aternos.org/go//');
            // await page.solveRecaptchas();
            await page.screenshot({ path: 'example0.png' });
            await page.type('#user', 'Gordozz_');
            await page.type('#password', 'Brunonoadelgaza');
            

            await page.click('#login');
            await page.waitForNavigation();
            await page.click('body > div.body > main > section > div > div.servers.single > div > div.server-body');
            await page.screenshot({ path: 'example1.png' });
            await page.waitForNavigation();
            await page.click('#start');
            await page.screenshot({ path: 'example2.png' });
            await page.waitForTimeout(5000);

            await page.screenshot({ path: 'example22.png' });
            
            await page.goto('https://aternos.org/server/');
            //await page.waitForSelector('#confirm', {visible:true});
            await page.waitForTimeout(20000);
            await page.screenshot({ path: 'example3.png' });
            
            await page.click('#confirm');
            await page.screenshot({ path: 'example4.png' });
            await page.waitForTimeout(20000);
            // await page.waitForSelector('#read-our-tos > main > div > div > div > main > div > a.btn.btn-red')
            await page.waitForTimeout(10000)
            await page.screenshot({ path: 'example.png' });
            console.log('listo')


            await browser.close();

            console.log('el proceso termino')
        })();
    }
}




// require('chromedriver');
// var webdriver = require('selenium-webdriver'),
// By = webdriver.By,
// until = webdriver.until;



// module.exports = {
//     name:'open_server',
//     description:'habre el server de minecraft',
//     execute(client, message, args, Discord){
//         var driver = new webdriver.Builder().forBrowser('chrome').build();
//         driver.get('https://aternos.org/servers/');




//         // driver.sleep(10000);
//         // driver.quit();
//     }
// }