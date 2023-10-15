const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V19', // ISI APIKEY LU
}

global.sewabot = ("5k Aja") // ISI HARGA SEWA BOT LU

global.namabot = "RvLionXz" // UBAH JADI NAMA LU
global.namaowner = "Reval" // NAMA OWNER
global.footer_text = "RvLionXz" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283136394680'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = 'RvLionXz Bot' //sticker wm ubah
global.author = 'Di Buat Oleh RvLionXz' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.fakelink = "https://github.com/RvLionXz" // bebas asal jan hapus
global.grubbot = (`*LINK GITHUB*\n\nhttps://github.com/RvLionXz`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = true // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
