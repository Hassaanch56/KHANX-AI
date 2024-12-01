const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PvIQTT7b#U6Dn5QWxVaPDvsSIrHxpQnoYx2hQgKaBPnnwNhCFLZc",
  // add your Session Id 
PREFIX: process.env.PREFIX || ",",
  // add your prifix for bot
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
ANTI_BAD: process.env.ANTI_BAD || "false",
// false kr true Anti-Bad words 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hzagwo.jpg",
// add img for alive msg
ALIVE_MSG: process.env.ALIVE_MSG || "> *_ALWAYS TRUST ALLAH❤️‍🩹⚡_*",
// add alive msg here 
SUDO_NB: process.env.SUDO_NB || "923556419245",
// add your sudo number like 92314xxxxxx
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  // add your mongodb
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  // make true or false status auto seen
MODE: process.env.MODE || "private",
  // make bot public or private 
AUTO_VOICE: process.env.AUTO_VOICE || "true"
  // make auto voice false or true
};
