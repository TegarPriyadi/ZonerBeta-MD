import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/wattpad?query=${text}&apikey=${global.zoner}`)
  let anu = await res.json()
  let ane = anu.result
  let gambar = ane.result[0].thumb
  let data = `*Title:* ${ane.judul}\n*Dibaca:* ${ane.dibaca}\n*Vote:* ${ane.divote}\n*Link:* ${ane.link}`
  conn.sendFile(m.chat, gambar, '', data, m)
}
handler.help = ['wattpad']
handler.tags = ['internet']
handler.command = /^(wattpad)$/i
handler.limit = true

export default handler
