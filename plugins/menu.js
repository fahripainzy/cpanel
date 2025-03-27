// BASE CREATE BY PYZ STORE 
/* JANGAN DI HPS HARGAI GOBLOK

• APA BILAH KEHAPUS CREDITS MAKA DI ANGGAP DOSA BESAR 

# PYZ STORE Bukan Sepuh ataupun Pengocok janda PYZ STORE cuma mau di anggap ada:) */


const fs = require("fs");
const os = require("os");

async function handler(m, { Pyz, isCreator, isPremium, runtime, sleep, qloc }) {
  // Header Menu
  let teksHeader = `
╭━─━─━─━─━─━──━──━─━╮

┃   🤖✨ *Adit Bot* ✨🤖  

╰─━──━─━─━─━─━─━──━━╯

📌 🔹 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 🔹
╔═══════════════════╗  
║ 🤖 *Bot Name    :* ${global.botname2}  
║ 👑 *Creator     :* ${global.owner}  
║ 🌎 *Mode        :* ${Pyz.public ? "Public":"Self"}  
║ ⏳ *Uptime      :* ${runtime(process.uptime())}   
║ 🕒 *Server Time :* ${runtime(os.uptime())}  
║ 🛠️ *Version     :* ${global.versi}  
║ 📣 *Channel Dev :* Klik Disini  
╚═══════════════════╝  

👤 🔹 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 🔹
╔═══════════════════╗  
║ 📞 *Nomor   :* ${m.sender.split("@")[0]}
║ 💎 *Status   :* ${isCreator ? "Owner" :isPremium ? "Premium" :"Free User"}👤  
╚═══════════════════╝  

📝 📜 𝗖𝗔𝗧𝗔𝗧𝗔𝗡 📜
╔═══════════════════╗  
║ ➤ 📌 *Ketik .allmenu untuk melihat fitur lengkap*  
║ ➤ 📞 *Ketik .owner untuk menghubungi admin*  
╚═══════════════════╝  
`;         
Pyz.sendMessage(m.chat, {
    caption: teksHeader,
    footer: "Cpanel By Fahri",
    image: fs.readFileSync("./src/media/thumb.jpg"),
    buttons: [
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'KLIK UNTUK MELIHAT MENU',
        sections: [
{title: "# 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 𝗕𝗢𝗧", rows: [ {title: "📂 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨", description: "Menampilkan All Menu/All Fitur Yang Tersedia", id: '.allmenu' }]},
{title: "# 𝗣𝗔𝗡𝗘𝗟 𝗩1", rows: [{ title:  " SERVER 1", description: "🤖 Membuat servers 1 panel pterodactyl", id: `.cpanel` }]},
{title: "# 𝗣𝗔𝗡𝗘𝗟 𝗩2", rows: [{ title: "SERVER 2", description: "🤖 Membuat Servers 2 panel pterodactyl", id: `.cpanel-v2` },
]}],
})},
}],
headerType: 1,
viewOnce: true
}, { quoted: qloc });
}
handler.command = [".kontol", "menu", "fahribot", "infobot"];
module.exports = handler;