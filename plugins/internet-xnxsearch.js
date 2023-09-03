import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/xnxx?query=${text}&apikey=${global.zoner}`)
  let anu = await res.json()
  let ane = anu.result
  let data = `*Title:* ${ane.title}\n*duration:* ${ane.duration}\n*Link*: ${ane.link}`
  m.reply(data)
}
handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i
handler.premium = true

export default handler
