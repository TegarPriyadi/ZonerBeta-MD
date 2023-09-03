import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Nama query!!`
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/animequotes?query=${text}&apikey=${global.zoner}`)
  let json = await res.json()
  let ress = json.result;
  let gambar = ress.thumb;
  
  let info = `*Name:* ${ress.character}\n*Anime:* ${ress.anime}\n*episode:* ${ress.episode}\n*Thumbnail:* ${ress.thumb}\n*quotes:* ${ress.quotes}`

  conn.sendFile(m.chat, gambar, 'Thumbnail.jpg', info, m)
}
handler.help = ['charainfo']
handler.tags = ['anime']
handler.command = /^(charainfo)$/i
handler.limit = true
export default handler
