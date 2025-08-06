const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUw3VGtERmkvRzR5UVJ6Wk1yUVFoNjhxS0hWMlp6ZHJVZUlPRWxXb0VsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWFiMGVlVlpNRTk5dk44TGlJamNiMXpYMjZNMDExNnFzaFRYUmNqV2l3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQWhOVDM0SkNoUDFRYWh0VGRGVlVlZ2hqK25POGN5TlB6TEpPVGpRMjBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSTZ2NktCM3Y5SHZNVmFOWEhIOVZYMzM4Q3pnL1lXcjl1S2JEN0E3czI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFbngrWHJvWUFIUnFYV3FyVEZ3M1laMVBXTWVPME52TmRKTXhSUWN0Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJlaWZXa0FBVG5aenl0Zm0xMTlMM2lmc2JQbm12bEdXbWR6eTFKV1Y0MU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK00xbkc1YjdUYzluUlNlZU1ydG1MKzJxR2JzWFpWeHJ2K0JJSFA3VDVXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnZ6QlZSY2JWQ0tsZVZ1UVNFTHltdzFGMmZEWEhNa1huVENRb2NSdWxWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhxVUFUUUtmUUdxMTN4d0pxOXVFV2FsY2o4c21xTWliQ0NibmxtSTZGdE5jWUZJWnB6ZzA5R1RySDJVZklCUFZIOFZUaTF3L3BZSHlqWUdpYXhIY2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiY25ZOXlRcEhrV3JObUU4bFhBRUtkM3VuRFVkU2FXbmlHRkNYUk5hb3lSQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRllUSk1QUFMiLCJtZSI6eyJpZCI6Ijk0Nzc4OTM2NDkwOjY5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjM2MDAzMTE5NTE1NTg6NjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTFJnNE1DRUpyeHk4UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFU29sMzdHcGVRMmUzTFVUSlJrQ0JQa0RjMmhSTlZTVFVvODEyd0V1Q25nPSIsImFjY291bnRTaWduYXR1cmUiOiJobWJFbkxOc3hkTmI2dTNmSnNLM2liS0s4T0I1UFRNNTVFQTBablB1ME9LaHc0ckloSXBNQjFpMW1PQ2V6cExZOXJmKzAzOGpBc2FPNUxUbHgvWFdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZjNDS0tUM3pIQVRsOTBjMEtnWERPMGMrWEM5UUpiQm9KcDA4THNlcjdJMmVBUmhKTmVINFduQnYwelFUNDhvUUJ0QTdzWUVwaWN1U3JhNWIxeEdVZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3ODkzNjQ5MDo2OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRXFKZCt4cVhrTm50eTFFeVVaQWdUNUEzTm9VVFZVazFLUE5kc0JMZ3A0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0NjIzNjQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SACHI_MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ljmrp8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SACHI_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SACHI_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94778936490",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ljmrp8.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">im alive now",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
