import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apk Apa?`
  m.reply(wait)
  let res = await fetch(`https://api.zonerweb.biz.id/api/webzone/playstore?query=${text}&apikey=${global.zoner}`)
  let anu = await res.json()
  let ane = anu.result[0]
  let data = `*Nama:* ${ane.nama}\n*Developer:* ${ane.developer}\n*Rate:* ${ane.rate}\n*Rate 2:* ${ane.rate2}\n*Link:* ${ane.link}\nLinkDev: ${ane.link_dev}`

  m.reply( data )
}
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

export default handler
