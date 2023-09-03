import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/liriklagu?query=${text}&apikey=${global.zoner}`)
  let anu = await res.json()
  let daya = anu.result
  conn.sendFile(m.chat, daya.thumb, 'lirik.jpg', daya.lirik, m)
}
handler.help = ['liriklagu']
handler.tags = ['internet']
handler.command = /^(liriklagu)$/i
handler.limit = true

export default handler
