const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login("NjI0OTEwODQwNjU0NDYyOTc2.XYdTeQ.gTOxNmtet8DNMP6I2leDdeYIReA");

bot.on("message", (message) =>
{
    if (message.content.startsWith("!msg annonce"))
    {
        var strAnnonce = message.content
        bot.channels.get('623606816718323733').send(strAnnonce.substring(13))
    }

});

bot.on("message", (message) =>
{
    if (message.content.startsWith("!msg stats"))
    {
        var strStats = message.content
        bot.channels.get('624278546864406528').send(strStats.substring(11))
    }
    
});