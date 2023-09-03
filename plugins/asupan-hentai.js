import fetch from 'node-fetch'

let handler = async(m, { conn, command }) => {
  let res = `https://api.zonerweb.biz.id/api/nsfw/waifu?apikey=${global.zoner}`
  conn.sendFile(m.chat, res, 'res.jpg', '_Done_', m)
}
handler.command = /^(hentai)$/i
handler.help = ['hentai']
handler.tags = ['random']
handler.premium = true

export default handler