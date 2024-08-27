const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Colombo,SriLanka."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

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

  sessionName:process.env.SESSION_ID || "SUHAIL_04_44_08_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1UGg3QzNyL3AvcDNORXdkaGhYWXJrNkJNZm1sRzNhek1Bb0ZXZHduMjZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzSEhQcmw0Z1FaQ1YwblpjNnN5XzJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlOWRkY2MzLTgzNGYtNGFmMy05YTRhLWIzODIwYjRlNTNjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAxMixcbiAgICAgIDIwNyxcbiAgICAgIDc1LFxuICAgICAgMTM3LFxuICAgICAgNDEsXG4gICAgICA5MSxcbiAgICAgIDEwLFxuICAgICAgMTQxLFxuICAgICAgMTc0LFxuICAgICAgMTQzLFxuICAgICAgMTM4LFxuICAgICAgNjQsXG4gICAgICA4MSxcbiAgICAgIDE4MSxcbiAgICAgIDg0LFxuICAgICAgMjA0LFxuICAgICAgMjUyLFxuICAgICAgMTE1LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDE5NixcbiAgICAgIDc1LFxuICAgICAgMTc4LFxuICAgICAgMTg2LFxuICAgICAgMjMsXG4gICAgICAyMCxcbiAgICAgIDgxLFxuICAgICAgMTk4LFxuICAgICAgNDUsXG4gICAgICAyMTIsXG4gICAgICAxNjksXG4gICAgICAxMCxcbiAgICAgIDk5LFxuICAgICAgNDMsXG4gICAgICAyMDksXG4gICAgICAxNDUsXG4gICAgICA1NixcbiAgICAgIDM3LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEhZTlFWUzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU5NTA0ODk0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjAwMjY5MzYyMzk2NjoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMjAzL2tGRUptenRiWUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVJc3ZxTzVua2NDNVFSVWlBWkM1YnVjaDhTUlJiaGtXZXJPQSswckgzMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNi9haXYrMURXUVlvd25ic0FibWJLM3pvTDZwOGtxWCtmZEFqM3I0S1AyRVd2aWhPdGhpWTlTaUlEK3J5cVhGRFFvR09hVFlnYVJGaEMxbk9HSDZDQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaWtwb1AzNkRNelJCdUNCQ3ZpNmZPTHZDMHdOalh4Y09UZGpaYjdPUEVRM1U1TlpyUDNPOUZyaWpSNWE0UHRKSWFxSzdQaTBsOUowQ3RyVmFSTkZYakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTk1MDQ4OTQ6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDczMzg1MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
