import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Linknya?`
  let res = await fetch(`found`)
  let json = await res.json()
  conn.sendFile(m.chat, json.data.thumbnail, '', json.data.info, m)
}
handler.help = ['nhentaidetail']
handler.tags = ['anime']
handler.command = /^(nhentaidetail)$/i
handler.premium = true

export default handler