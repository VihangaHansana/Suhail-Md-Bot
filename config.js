const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Colombo,SriLanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vihanga:@Nikiya0220@niki.ksc0vpq.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || "vps"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94759504894";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ᴠɪʜᴀɴɢᴀ ʜᴀɴꜱᴀɴᴀ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᴠɪʜᴀɴɢᴀ",
  packname: process.env.PACK_NAME || "❤️‍🩹",
  botname : process.env.BOT_NAME  || "ɴɪᴋɪ ʙᴏᴛ",
  ownername:process.env.OWNER_NAME|| "ᴠɪʜᴀɴɢᴀ ʜᴀɴꜱᴀɴᴀ",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_42_08_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdWV3lJcFBabmtHazFDNkJmL011Z2ZmSGs2TEtkb29wdUFVSFJyaENaZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpISHVDRFNPUWg2TTdkMjcwdVlINkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjRhNjdmYjYtNWE2NS00N2NjLTljZWUtZTI2MzVhYTM2NTM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDc0LFxuICAgICAgMjUyLFxuICAgICAgMTU0LFxuICAgICAgMTYsXG4gICAgICAxNDcsXG4gICAgICAxODgsXG4gICAgICAxMjQsXG4gICAgICAyMzAsXG4gICAgICAxNTMsXG4gICAgICAxMDYsXG4gICAgICA4NyxcbiAgICAgIDExNyxcbiAgICAgIDMzLFxuICAgICAgOSxcbiAgICAgIDExNCxcbiAgICAgIDEzOSxcbiAgICAgIDE0MyxcbiAgICAgIDI0OCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAxMyxcbiAgICAgIDE1LFxuICAgICAgMjAsXG4gICAgICAxMzEsXG4gICAgICA1MCxcbiAgICAgIDMzLFxuICAgICAgMTc1LFxuICAgICAgMTI4LFxuICAgICAgMjEsXG4gICAgICAyMzEsXG4gICAgICAyNDQsXG4gICAgICAxOTIsXG4gICAgICAxOTQsXG4gICAgICA0NSxcbiAgICAgIDEzNyxcbiAgICAgIDM1LFxuICAgICAgNDIsXG4gICAgICA5MCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RFpKUTlaRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTk1MDQ4OTQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2MDAyNjkzNjIzOTY2OjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AyMDMva0ZFT0hGdTdZR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUlzdnFPNW5rY0M1UVJVaUFaQzVidWNoOFNSUmJoa1dlck9BKzBySDMxdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRU0dXSzRHYVJ0Yld5NkVSMEJsd0psZEREMlUwNGxvZWVna2hNRFFsYWxHZGlPZkN0eGVkVzJVQ3JnOUFtSG5TaWpKZmRRS1FaV2xaZFpJaE5ESDJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHL0VsRjFSbWg1ZWxGNktKY0RWOUtNNGYyTVpROS9hby94MVE1Q1E5YlRmWVJIbGEyK3ZGbGh0ckZ3WDUwNWVwcGdJK0ExZ0pZVmN1S1NPaENpWVpBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1OTUwNDg5NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0ODM0NTM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzliXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHOWIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlRjFVZ0RUM3QxMmdGYVdzOFdwendOUXVwdnVEbkU0VkFTQk95cENPcXVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTc0OTU5MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
