import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/soundcloudsearch?query=${text}&apikey=${global.zoner}`)
  let anu = await res.json()
  let ane = anu.result
  let data = `*Judul:* ${ane.title}\n*Link:* ${ane.url}\n`
  m.reply(data)
}
handler.help = ['soundsearch']
handler.tags = ['internet']
handler.command = /^(soundsearch)$/i
handler.limit = true

export default handler
