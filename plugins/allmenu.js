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
        title: 'List Massage :)',
        sections: [
{ title: "✨️ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ✨️", 
rows: [{ title: "👑 Add Reseller", description: "Untuk Nge Addreseller Anda", id: `.addreseller` },
{ title: "👑 Del Reseller", description: "Untuk Nge Delseller User Yang terdaftar Reseller", id: ".delreseller" },
{ title: "👑 List Reseller", description: "Untuk Melihat List Reseller", id: ".listreseller" },
{ title: "👑 Add Owner", description: "Untuk Nge Addowner User Anda", id: ".addowner" },
{ title: "👑 Del Owner", description: "Untuk Nge Del Owner User Yang Terdaftar Owner", id: ".delowner" },
{ title: "👑 Public", description: "Untuk Mengganti Bot Ke Public", id: `.public` },
{ title: "👑 Self", description: "Untuk Mengganti Bot Ke Self", id: `.self` }]},
{ title: "🌐 𝗣𝗔𝗡𝗘𝗟 𝗢𝗪𝗡𝗘𝗥",
rows: [{ title: "✨️Del Panel v1", description: "Untuk Del panel servers satu", id: `.delpanel` },
{ title: "✨️List Panel v1", description: "Untuk cek list panel severs satu", id: `.listpanel` },
{ title: "✨️Create Admin V1", description: "Untuk Membuat admin panel pterodactyl servers satu", id: `.cadmin` },
{ title: "✨️List admin panel V1", description: "Untuk cek list admin panel servers kesatu", id: `.listadmin` },
{ title: "✨️Create panel V1", description: "Membuat servers panel pterodactyl ke satu", id: `.cpanel` }]},
{ title: "🌐 𝗣𝗔𝗡𝗘𝗟 𝗥𝗘𝗦𝗘𝗟𝗟𝗘𝗥", 
rows: [{ title: "✨️Del Panel V2", description: "Untuk Del panel servers dua", id: `.delpanel-v2` },
{ title: "✨️List Panel V2", description: "Untuk cek list panel severs dua", id: `.listpanel-v2` },
{ title: "✨️Create Admin V2", description: "Untuk Membuat admin panel pterodactyl servers dua", id: `.cadmin-v2` },
{ title: "✨️List admin panel V2", description: "Untuk cek list admin panel servers dua", id: `.listadmin-v2` },
{ title: "✨️Create panel V2", description: "Membuat servers panel pterodactyl ke dua", id: `.cpanel-v2` }]},
{ title: "📝 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 📝", rows: [{ title: "➕ 𝖠𝖽𝖽", description: "Untuk Menambahkan Member Ke Group", id: `.add` },
{ title: "🦶 𝖪𝗂𝖼𝗄", description: "Untuk Mengeluarkan Member Dari Group", id: `.kick` },
{ title: "🔒 𝖢𝗅𝗈𝗌𝖾", description: "Untuk Menutup Group", id: `.close` },
{ title: "🔓 𝖮𝗉𝖾𝗇", description: "Untuk Membuka Group", id: `.open` },
{ title: "🔊 𝖧𝗂𝖽𝖾𝗍𝖺𝗀", description: "Untuk Mengirim Pesan Ke Group Dan Tag", id: `.hidetag` },
{ title: "☠️ 𝖪𝗎𝖽𝖾𝗍𝖺 𝖦𝖼", description: "Untuk Mengeluarkan All Member Kecuali Admin", id: `.kudetagc` },
{ title: "📤 𝖫𝖾𝖺𝗏𝖾", description: "Untuk Keluar Dari Group", id: `.leave` },
{ title: "📣 𝖳𝖺𝗀𝖺𝗅𝗅", description: "Untuk Mengetag All Member Group", id: `.tagall` },
{ title: "🚀 𝖯𝗋𝗈𝗆𝗈𝗍𝖾", description: "Untuk Menaikan Pangkat Member Di Group", id: `.promote` }, 
{ title: "⬇️ 𝖣𝖾𝗆𝗈𝗍𝖾", description: "Untuk Menurunkan Pangkat Admin Di Group", id: `.demote` }, 
{ title: "♻️ 𝖱𝖾𝗌𝖾𝗍 𝖫𝗂𝗇𝗄 𝖦𝖼", description: "Untuk Mengganti Link Group", id: `.resetlinkgc` }, 
{ title: "👋 Welcome", description: "Untuk Mengaktifkan Fitur Welcome Otomatis", id: `.on` },
{ title: "🛡️ Antilink", description: "Mengaktifkan Fitur Antilink Otomatis", id: `.antilink` },
{ title: "🛡️ Antilink V2", description: "Mengaktifkan Fitur Antilink V2", id: `.antilink2`, },
{ title: "🔗 𝖫𝗂𝗇𝗄 𝖦𝖼", description: "Untuk Mendapatkan Link Group", id: `.linkgc` },
]}],
})},
}],
headerType: 1,
viewOnce: true
}, { quoted: qloc });
}
handler.command = [".kontol", "allmenu", "fahriah", "infobot"];
module.exports = handler;