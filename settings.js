const fs = require("fs");
const chalk = require("chalk");

// ** Settings Bot **
global.owner = "6285820360355"; // Bebas Ubah Syggg
global.versi = "3.0.0"; // Bebas Ubah Syggg
global.namaOwner = "Fahri"; // Bebas Ubah Syggg
global.packname = "Bot WhatsApp"; // Bebas Ubah Syggg
global.botname = "Adit Bot"; // Bebas Ubah Syggg
global.botname2 = "Adit Bot"; // Bebas Ubah Syggg

global.tempatDB = "database.json"; // Jangan ubah
global.pairing_code = true; // Jangan ubah
global.admin1 = "62895326269154"; // Bebas Ubah Syggg

// ** Settings Link / Tautan **
global.linkOwner = "https://wa.me/6285820360355"; // Bebas Ubah Syggg
global.linkGrup = "https://chat.whatsapp.com/F1RKLEYUZcm6594brPuMet"; // Bebas Ubah Syggg
global.linkGrup2 = "https://chat.whatsapp.com/F1RKLEYUZcm6594brPuMet"; // Bebas Ubah Syggg

global.ownertele = "6758060721"; // Bebas Ubah Syggg
global.tokenapi = "7842487172:AAHkicI3iEuRqdxOp304acQ6xbg9zmSQpBo"; // Jangan Di Ubah

// ** Settings Channel / Saluran **
global.linkSaluran = "https://whatsapp.com/channel/0029Vb3z2N8GU3BSWq6OpU2z";
global.idSaluran = "120363412282169608@newsletter";
global.namaSaluran = "Pallzz Channel 👻";

// ** Settings API Panel Pterodactyl **
global.egg = "15"; // Egg ID
global.nestid = "5"; // Nest ID
global.loc = "1"; // Location ID
global.domain = "https://pwanel.ryunetwork.my.id";
global.apikey = "ptlc_UWnmoxnvdW9Yx11RbD8SHbA4zIr7F05K0HIvhHlzzMi"; // PTLC
global.capikey = "ptla_hfCPuJE08hLPD56wGRU3TpYncg82atOqQN7mjeRhpf0"; // PTLA

// ** Settings API Panel Pterodactyl Server 2 **
global.eggV2 = "15"; // Egg ID
global.nestidV2 = "5"; // Nest ID
global.locV2 = "1"; // Location ID
global.domainV2 = "https://draynews.drayreal.store";
global.apikeyV2 = "ptlc_WNtl8tSYa4ug0leWmlnaH8rXv1WaaNwDg2vcHXF6en1"; // PTLC
global.capikeyV2 = "ptla_cxJSd2zze3ltFFJI611i93aZSXGJ3FUmM1vzmEPWaf6"; // PTLA

// ** Message Command **
global.mess = {
    owner: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Fitur Ini Khusus Owner Bot!
╰━━━━━━━━━━━━━━━━━⬣`,

    admin: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Fitur Ini Khusus Admin Grup!
╰━━━━━━━━━━━━━━━━━⬣`,

    botAdmin: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Bot Harus Menjadi Admin!
╰━━━━━━━━━━━━━━━━━⬣`,

    group: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Fitur Hanya Untuk Grup!
╰━━━━━━━━━━━━━━━━━⬣`,

    private: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Fitur Hanya Untuk Chat Pribadi!
╰━━━━━━━━━━━━━━━━━⬣`,

    prem: `╭━━━━〔 AKSES DITOLAK 〕━━━⬣
┃ ⚠️ Mohon Maaf,
┃ Fitur Khusus User Premium!
╰━━━━━━━━━━━━━━━━━⬣`,

    wait: `╭━━━━〔 LOADING... 〕━━━⬣
┃ 📝 Sedang Diproses...
┃ Mohon Tunggu Sebentar
╰━━━━━━━━━━━━━━━━━⬣`,

    error: `╭━━━━〔 ERROR 〕━━━⬣
┃ ❌ Terjadi Kesalahan
┃ Silakan Coba Lagi Nanti
╰━━━━━━━━━━━━━━━━━⬣`,

    done: `╭━━━━〔 SUKSES 〕━━━⬣
┃ ✅ Berhasil Dilakukan!
╰━━━━━━━━━━━━━━━━━⬣`
};

// ** Auto-Reload Config File **
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});