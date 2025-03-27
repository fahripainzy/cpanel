// BASE CREATE BY PYZ STORE 
/* JANGAN DI HPS HARGAI GOBLOK

• APA BILAH KEHAPUS CREDITS MAKA DI ANGGAP DOSA BESAR 

# PYZ STORE Bukan Sepuh ataupun Pengocok janda PYZ STORE cuma mau di anggap ada:) */


require("./settings");
const fs = require("fs");
const pino = require("pino");
const path = require("path");
const axios = require("axios");
const chalk = require("chalk");
const readline = require("readline");
const FileType = require("file-type");
const { exec } = require("child_process");
const { say } = require("cfonts");
const { Boom } = require("@hapi/boom");
const express = require("express");
const NodeCache = require("node-cache");
const os = require('os');
const https = require('https');
const { Telegraf } = require('telegraf');

const {
  default: WAConnection,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  Browsers,
  DisconnectReason,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  fetchLatestWaWebVersion,
  proto,
  PHONENUMBER_MCC,
  getAggregateVotesInPollMessage,
} = require("@whiskeysockets/baileys");

const app = express();
const PORT = process.env.PORT || 3000; // Port harus dari Render

const pairingCode =
  global.pairing_code || process.argv.includes("--pairing-code");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const TELEGRAM_BOT_TOKEN = global.tokenapi || '';
const TELEGRAM_OWNER_ID = global.ownertele || '';
const telegramBot = new Telegraf(TELEGRAM_BOT_TOKEN);
//================================================================================

const yangBacaHomo = [
  `
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
`,
  `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`,
  `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`,
  `
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`,
  `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`,
];
const imageAscii =
  yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const listcolor = ["cyan", "magenta", "green", "yellow", "blue"];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const { cleaningSession } = require("./lib/boostsession");
(async () => {
  setInterval(async () => {
    await cleaningSession("./session");
  }, 5000);
})();

//================================================================================

const DataBase = require("./src/database");
const database = new DataBase();
(async () => {
  const loadData = await database.read();
  if (loadData && Object.keys(loadData).length === 0) {
    global.db = {
      users: {},
      groups: {},
      database: {},
      settings: {},
      ...(loadData || {}),
    };
    await database.write(global.db);
  } else {
    global.db = loadData;
  }

  setInterval(async () => {
    if (global.db) await database.write(global.db);
  }, 3500);
})();

//================================================================================

const { MessagesUpsert, Solving } = require("./src/message");
const {
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./lib/function");

//================================================================================

async function startingBot() {
  const store = await makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  const { state, saveCreds } = await useMultiFileAuthState("session");
  const { version, isLatest } = await fetchLatestWaWebVersion();
  const msgRetryCounterCache = new NodeCache();

  const Pyz = WAConnection({
    printQRInTerminal: !pairingCode,
    logger: pino({ level: "silent" }),
    auth: state,
    version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg?.message || undefined;
      }
      return {
        conversation: "WhatsApp Bot By Kenjaa Store",
      };
    },
  });

  //================================================================================

function getPublicIP() {
return new Promise((resolve, reject) => {
https.get('https://api.ipify.org?format=json', (res) => {
let data = '';
res.on('data', chunk => data += chunk);
res.on('end', () => {
try {
const ip = JSON.parse(data).ip;
resolve(ip);
} catch (error) {
reject('Error parsing IP response');
}
});
}).on('error', err => reject(`Error fetching IP: ${err.message}`));
});
}

if (pairingCode && !Pyz.authState.creds.registered) {
getPublicIP()
.then(ipPanel => {
const ownerInfo = {
ipPanel: ipPanel,  // IP Panel otomatis dari VPS
ownerNumber: "+6282323866218",  // Nomor Owner
ownerName: "Fahri",  // Nama Owner
githubLink: "https://github.com/RudoNapitu",  // Link GitHub
telegramLink: "https://t.me/rudolnapitu07"  // Link Telegram
};

// Header Message
const headerMessage = [
  chalk.greenBright.bold("════════════════════════════════════"),
  chalk.yellowBright("✨  Credits By Fahritore ✨"),
  chalk.blueBright(`🌐 IP Panel       : ${ownerInfo.ipPanel}`),
  chalk.blueBright(`📞 Owner Number  : ${ownerInfo.ownerNumber}`),
  chalk.blueBright(`👤 Owner Name    : ${ownerInfo.ownerName}`),
  chalk.blueBright(`🐙 GitHub        : ${ownerInfo.githubLink}`),
  chalk.blueBright(`📨 Telegram      : ${ownerInfo.telegramLink}`),
  chalk.redBright("📲 Contact       : wa.me/6282323866218"),
  chalk.greenBright.bold("════════════════════════════════════"),
  chalk.cyanBright.bold("\n📝 Masukkan Nomor WhatsApp"),
  chalk.cyanBright("Contoh Format: 6285XXX")
];

// Pastikan konsol bersih dan cetak hanya satu kali
console.clear(); // Membersihkan konsol sebelum mencetak
console.log(headerMessage.join("\n")); // Cetak array dengan newline


question(
chalk.black(
)
).then(phoneNumber => {
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

Pyz.requestPairingCode(phoneNumber)
.then(code => {
if (!code) {
throw new Error("Nomor tidak ditemukan atau kode pairing tidak tersedia.");
}
code = code.match(/.{1,4}/g).join(" - ");
console.log(
chalk.magenta.italic("Kode Pairing Kamu :"),
chalk.white.bold(code)
);
})
.catch(error => {
console.error(
chalk.red.bold(
`Error: ${error.message || "Terjadi kesalahan saat mendapatkan kode pairing."}`
)
);
});
});
})
.catch(error => {
console.error(
chalk.red.bold(`Error fetching public IP: ${error}`)
);
});
}

  //================================================================================

  await store.bind(Pyz.ev);
  await Solving(Pyz, store);

  //================================================================================

  Pyz.ev.on("creds.update", await saveCreds);

  //================================================================================
// Pastikan Pyz sudah terhubung sebelum mengambil botNumber
let botNumber = null;

if (Pyz && Pyz.user && Pyz.user.id) {
    botNumber = Pyz.user.id.split(':')[0];
} else {
    console.error('❌ Error: FahriStore belum terhubung atau id tidak tersedia.');
    botNumber = 'Unknown'; // Atau gunakan nilai default lain jika diperlukan
}

// Graceful shutdown
const notificationMessage = `
*Fahri CPANEL V3\\!*

🤖 *Bot Successfully Connected\\!*

📱 *Contact WhatsApp Bot:* ${botNumber}

📢 *Don't forget to Subscribe:*
⭐ [YouTube Channel](https://www.youtube.com/@Fahrijebeh)

🔔 Stay updated with the latest
   script updates and features\\!

_Bot is ready to use\\!_ ✨`.trim();

// Function to send Telegram notification
async function sendTelegramNotification() {
    try {
        // Validate owner ID
        if (!TELEGRAM_OWNER_ID) {
            throw new Error('TELEGRAM_OWNER_ID not configured');
        }

        // Send message with proper error handling
        await telegramBot.telegram.sendMessage(
            TELEGRAM_OWNER_ID,
            notificationMessage,
            {
                parse_mode: 'MarkdownV2', // Using MarkdownV2 for better compatibility
                disable_web_page_preview: false,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: '📺 Subscribe Channel',
                                url: 'https://www.youtube.com/@Fahrijebeh',
                            },
                        ],
                    ],
                },
            }
        );
    } catch (error) {
        if (error.message.includes('chat not found')) {
            console.error('❌ Telegram Error: Invalid chat ID or bot not added to chat');
            console.log('📝 Troubleshooting steps:');
            console.log('1. Start chat with your bot first');
            console.log('2. Check if TELEGRAM_OWNER_ID is correct');
            console.log('3. Get your ID from @userinfobot');
        } else {
            console.error('❌ Telegram Error:', error.message);
        }
    }
}

Pyz.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, receivedPendingNotifications } = update;

    if (connection === "close") {
        const reason = new Boom(lastDisconnect?.error)?.output.statusCode;

        if (reason === DisconnectReason.connectionLost) {
            console.log("Connection to Server Lost, Attempting to Reconnect...");
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log("Connection closed, Attempting to Reconnect...");
        } else if (reason === DisconnectReason.restartRequired) {
            console.log("Restart Required...");
        } else if (reason === DisconnectReason.timedOut) {
            console.log("Connection Timed Out, Attempting to Reconnect...");
        } else if (reason === DisconnectReason.badSession) {
            console.log("Delete Session and Scan again...");
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log("Close current Session first...");
        } else if (reason === DisconnectReason.loggedOut) {
            console.log("Scan again and Run...");
            exec("rm -rf ./session/*");
            process.exit(1);
        } else if (reason === DisconnectReason.multideviceMismatch) { // Fixed typo
            console.log("Scan again...");
            exec("rm -rf ./session/*");
            process.exit(0);
        } else {
            Pyz.end(`Unknown DisconnectReason : ${reason} | ${connection}`);
        }

        startingBot(); // Call the bot start function in appropriate places
    } 
    
    if (connection === "open") {
        // Send WhatsApp notification first
        try {
            await Pyz.sendMessage(
                Pyz.user.id.split(":")[0] + "@s.whatsapp.net",
                {
                    text: notificationMessage.replace(/\\/g, ''), // Remove escape chars for WhatsApp
                    contextInfo: {
                        externalAdReply: {
                            title: "Fahri CPANEL V3.0.0",
                            body: "Bot is ready to use!",
                            thumbnail: fs.readFileSync("./src/media/thumb.jpg"),
                            sourceUrl: "https://youtube.com/@PyzStore",
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
            console.log('✅ WhatsApp notification sent');
        } catch (error) {
            console.error('❌ WhatsApp notification error:', error);
        }

        // Then send Telegram notification
        await sendTelegramNotification();

        // Setup commands for getting chat ID
        telegramBot.command('getid', (ctx) => {
            ctx.reply(`Your Chat ID is: ${ctx.chat.id}`);
        });

        // Start bot
        telegramBot.launch()
            .then(() => console.log('🤖 Telegram bot started'))
            .catch(error => console.error('❌ Telegram bot error:', error));

       
        console.log("\n");
        console.log(
            chalk.magenta.italic(`\n\nPYZ CPANEL Connected ✓\n\n`)
        );
    } else if (receivedPendingNotifications === "true") {
        console.log("Please wait About 1 Minute...");
    }
});


  //================================================================================

  Pyz.ev.on("messages.upsert", async (message) => {
    await MessagesUpsert(Pyz, message, store);
  });
  Pyz.sendList = async (jid, title, footer, btn, options, m = {}) => {
    const qtext = {
            key: {
              remoteJid: "status@broadcast",
              participant: "0@s.whatsapp.net",
            },
            message: {
              extendedTextMessage: {
                text: "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]",
              },
            },
          };
    let msgii = generateWAMessageFromContent(jid, {
    viewOnceMessage: {
    message: {
    "messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
    },
    interactiveMessage: proto.Message.InteractiveMessage.create({
    ...options,
    body: proto.Message.InteractiveMessage.Body.create({ text: title }),
    footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "Powered By KayyTwelve" }),
    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
    {
    "name": "single_select",
    "buttonParamsJson": JSON.stringify(btn)
    },
    ]
    })
    })
    }
    }
    }, {userJid: m.sender, quoted: qtext})
    return await Pyz.relayMessage(msgii.key.remoteJid, msgii.message, {
    messageId: msgii.key.id
    })
    }
  //================================================================================

  Pyz.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = Pyz.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });

  //================================================================================

  Pyz.ev.on("group-participants.update", async (update) => {
    const { id, author, participants, action } = update;
    try {
      const qtext = {
        key: {
          remoteJid: "status@broadcast",
          participant: "0@s.whatsapp.net",
        },
        message: {
          extendedTextMessage: {
            text: "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]",
          },
        },
      };
      if (global.db.groups[id] && global.db.groups[id].welcome == true) {
        const metadata = await Pyz.groupMetadata(id);
        let teks;
        for (let n of participants) {
          let profile;
          try {
            profile = await Pyz.profilePictureUrl(n, "image");
          } catch {
            profile = "https://telegra.ph/file/95670d63378f7f4210f03.png";
          }
          let imguser = await prepareWAMessageMedia(
            {
              image: {
                url: profile,
              },
            },
            {
              upload: Pyz.waUploadToServer,
            }
          );
          if (action == "add") {
            teks =
              author.split("").length < 1
                ? `@${n.split("@")[0]} join via *link group*`
                : author !== n
                ? `@${author.split("@")[0]} telah *menambahkan* @${
                    n.split("@")[0]
                  } kedalam grup`
                : ``;
            let asu = await Pyz.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await Pyz.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Welcome To Group",
                    description: `Selamat datang @${Pyz.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "remove") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *keluar* dari grup`
                : author !== n
                ? `@${author.split("@")[0]} telah *mengeluarkan* @${
                    n.split("@")[0]
                  } dari grup`
                : "";
            let asu = await Pyz.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await Pyz.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Leaving To Group",
                    description: `Selamat tinggal @${Pyz.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "promote") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *menjadi admin* grup `
                : author !== n
                ? `@${author.split("@")[0]} telah *menjadikan* @${
                    n.split("@")[0]
                  } sebagai *admin* grup`
                : "";
            let asu = await Pyz.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await Pyz.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Promote Member",
                    description: `Promote member @${Pyz.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          } else if (action == "demote") {
            teks =
              author == n
                ? `@${n.split("@")[0]} telah *berhenti* menjadi *admin*`
                : author !== n
                ? `@${author.split("@")[0]} telah *menghentikan* @${
                    n.split("@")[0]
                  } sebagai *admin* grup`
                : "";
            let asu = await Pyz.sendMessage(
              id,
              {
                text: `${teks}`,
                mentions: [author, n],
              },
              {
                quoted: qtext,
              }
            );
            await Pyz.relayMessage(
              id,
              {
                productMessage: {
                  product: {
                    productImage: imguser.imageMessage,
                    productId: "343056591714248",
                    title: "Demote Member",
                    description: `Demote member @${Pyz.getName(n)}`,
                    productImageCount: 1,
                  },
                  businessOwnerJid: "6282245415403@s.whatsapp.net",
                  contextInfo: {
                    mentionedJid: [n],
                  },
                },
              },
              {}
            );
          }
        }
      }
    } catch (e) {}
  });

  //================================================================================

  Pyz.ev.on("groups.update", async (update) => {
    try {
      const data = update[0];
      const qtext = {
        key: {
          remoteJid: "status@broadcast",
          participant: "0@s.whatsapp.net",
        },
        message: {
          extendedTextMessage: {
            text: "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]",
          },
        },
      };
      if (data?.inviteCode) {
        let botNumber = Pyz.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await Pyz.sendMessage(
          data.id,
          {
            text: `@${participant.split("@")[0]} telah *mereset* link grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }

      if (data?.desc) {
        let botNumber = Pyz.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await Pyz.sendMessage(
          data.id,
          {
            text: `@${
              participant.split("@")[0]
            } telah *memperbarui* deskripsi grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }

      if (data?.subject) {
        let botNumber = Pyz.user.id.split(":")[0];
        let participant = data.author;
        if (participant.split("@")[0] === botNumber) return;
        await Pyz.sendMessage(
          data.id,
          {
            text: `@${participant.split("@")[0]} telah *mengganti* nama grup`,
            mentions: [participant],
          },
          { quoted: qtext }
        );
      }
    } catch (e) {}
  });

  //================================================================================

  return Pyz;
}

startingBot();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
process.once('SIGINT', () => telegramBot.stop('SIGINT'));
process.once('SIGTERM', () => telegramBot.stop('SIGTERM'));

// **Menjalankan server Express untuk membuka port**
app.get("/", (req, res) => {
    res.send("BOT CPANEL BERHASIL DI BUAT 🧑‍💻⚡ BTW ADIT SUKA COLMEKIN JANDA");
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});