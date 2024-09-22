const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Colombo,SriLanka."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://vihangahansana060527:@Nikiya0220@cluster0.mx9jr.mongodb.net/"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94782303652";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_07_36_09_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgNjksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitJMm9USmh5Q2RaWVB1L1lxRVcwVlo5TS82OTZqd3dMYzMxMFlFN0tTVzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFBS2RTNld4U2RpYnJNQ0VEUko0aEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVlMTJkZjYtYjA3OC00OWFlLTlhMTQtYmFlOWE1ZjFiZDhkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgNyxcbiAgICAgIDM5LFxuICAgICAgMjA1LFxuICAgICAgNjIsXG4gICAgICAxMzAsXG4gICAgICAzMSxcbiAgICAgIDIyMCxcbiAgICAgIDE4MyxcbiAgICAgIDE0NixcbiAgICAgIDE1MyxcbiAgICAgIDE1NixcbiAgICAgIDE5LFxuICAgICAgNjEsXG4gICAgICAxODMsXG4gICAgICAxODQsXG4gICAgICA0MSxcbiAgICAgIDIyNSxcbiAgICAgIDgzLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDIzMixcbiAgICAgIDE4NCxcbiAgICAgIDYzLFxuICAgICAgMjQ3LFxuICAgICAgMTIxLFxuICAgICAgMTYyLFxuICAgICAgNjEsXG4gICAgICA4OCxcbiAgICAgIDE2OCxcbiAgICAgIDI0OSxcbiAgICAgIDUzLFxuICAgICAgNDksXG4gICAgICAxMjksXG4gICAgICAyNDUsXG4gICAgICA4MCxcbiAgICAgIDEzMixcbiAgICAgIDg1LFxuICAgICAgMjQ4LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZW12OE1FRVBpUnY3Y0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFES1VhWkJqcWVreGVRRXdjeGV2ZkRQdy9uQTFyU1R6ZGd4ZTZDUVVnbk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGRvTERiV0I0c1ErSlJDUmY2TGZFcmpIU3VmaEtrN1ZOUFIwK3dveXRTSGx5MFhjZjhvL2lXa01mcjh0d2J5WWJpTDJOLzNsZDJKZCt2ZVNqN1RqRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzBTdTZLcndGMEJBOVdvSUlLNU4xUU9UNGFacUcyTTYyK3JTY29id2FoMlZSRUtjYm1pc2VudStyUU11UG9ZOUxwUFVOMjNLMlVwOGdzMkx5VmthQUE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4MjMwMzY1Mjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODIxODAxNTU5NTczMDE6NDJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4MjMwMzY1Mjo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5OTA1ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxGMi5qc29uIjogIntcImtleURhdGFcIjpcIjVzZE1JZVc5eXp6eUREd0tZenBQdjhQYllUaDdtS0lpWWtJU2J3SmsveDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxNTI4ODE4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2OTg2MzYzMzEzXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
