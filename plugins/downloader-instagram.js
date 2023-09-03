import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
  let res = await fetch(`https://api.zonerweb.biz.id/api/download/instagram?apikey=${global.zoner}&url=${text}`)
  let json = await res.json()
  let video = json.result
  let cap = `_Done Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: video.url }, caption: cap }, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

export default handler