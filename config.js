const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LuwUBDjZ#4LkbTX0TtVagB26WFU4J7BOn1Pn-pbbhFcS5Sv5E5qM",
// add your Session Id 
PREFIX: process.env.PREFIX || ",",
// add your prifix for bot
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
ANTI_BAD: process.env.ANTI_BAD || "false",
// false kr true Anti-Bad words 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hzagwo.jpg",
// add img for alive msg
ALIVE_MSG: process.env.ALIVE_MSG || "> Zinda Hun Yar *KHAN-AI*⚡",
// add alive msg here 
SUDO_NB: process.env.SUDO_NB || "",
// add your sudo number like 92314xxxxxx
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
  // add your mongodb
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  // make true or false status auto seen
MODE: process.env.MODE || "public",
  // make bot public or private 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
  // make bot public or private 
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
  // make bot public or private 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
  // make bot public or private 
AUTO_VOICE: process.env.AUTO_VOICE || "true"
  // make auto voice false or true
};
