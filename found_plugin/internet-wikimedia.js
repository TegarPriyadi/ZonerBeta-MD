import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let res = await fetch(`found`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Title:* ${v.title}\n*Source:* ${v.source}\n*Image:* ${v.image}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['wikimedia']
handler.tags = ['internet']
handler.command = /^(wikimedia)$/i
handler.limit = true

export default handler
