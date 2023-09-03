import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Nama Manganya!!`
  let res = await fetch(`https://api.zonerweb.biz.id/api/search/manga?query=${text}&apikey=${global.zoner}`)
  let json = await res.json()
  let result = json.result
  let gambar = result.coverImage.large

  let info = `*Title:* ${result.title.romaji}\n*Status:* ${result.status}\n*Volum:* ${result.volumes}\n*Score:* ${result.source}\n*Thumbnail:* ${result.coverImage.large}\n*Description:* ${result.description}`
  conn.sendFile(m.chat, gambar, 'Thumbnail.png', info, m)
}
handler.help = ['mangainfo']
handler.tags = ['anime']
handler.command = /^(mangainfo)$/i
handler.limit = true
export default handler
