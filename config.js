import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628xxx', 'Zoner', true]
]
global.mods = []
global.prems = []

// Info
global.nomorwa = '628xxx'
global.packname = 'ZonerBeta - MD by'
global.author = '© TegarPriyadi'
global.namebot = 'ZonerBeta - MD'
global.wm = '© ZonerBeta By Xyroine'
global.stickpack = 'ZonerBeta - MD by'
global.stickauth = '© TegarPriyadi'
global.fotonya = 'https://telegra.ph/file/26790322a4c91486aed24.jpg'

// Link Sosmed
global.sig = 'https://www.instagram.com/'
global.sgh = 'https://github.com/'
global.sgc = 'https://chat.whatsapp.com/'

// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'

// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 

// Apikey
global.lol = 'APIKEY_KAMU'
global.zoner = 'APIKEY_KAMU'

// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.zonerweb.biz.id
// Daftar dan langganan Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    zoner: "https://api.zonerweb.biz.id",
    popcat : 'https://api.popcat.xyz'
}

//Apikey
global.APIKeys = {
    "https://api.zonerweb.biz.id": "apikeymu",
};

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
});


// bot ini sepenuh nya menggunakan api dari
//  website: https://api.zonerweb.biz.id
// kalau terjadi bug/error atasi sendiri :u 
// manja trs
