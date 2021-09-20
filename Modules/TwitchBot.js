const tmi = require('tmi.js');
require('dotenv').config();

class TwitchBot{
    constructor(){
        this.client = null;

        this.client = new tmi.Client({
            connection: {
                    secure: true,
                    reconnect: true
                  },
                  channels: [ process.env.CHANNELNAME ]
        })

        this.client.connect();

        this.client.on('message', (channel, tags, message, self) => {
            console.log(`${tags['display-name']}: ${message}`);
        });
    }
}
  
module.exports = {TwitchBot}