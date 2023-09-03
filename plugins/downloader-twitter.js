import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.twitterdl https://twitter.com/faqeeyaaz/status/1242789155173617664?s=20&t=DRgdl9U8MwTwpY0o1o-96g*`
m.reply(wait)
  let res = await fetch(`https://api.zonerweb.biz.id/api/download/twitter?url=${text}&apikey=${global.zoner}`)
  let json = await res.json()
  let video = json.result.url
  conn.sendMessage(m.chat, { video: { url: video.hd }, caption: `_Done Videonya_` }, { quoted: m })
  }
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^twitter|twitterdl$/i
handler.limit = true

export default handler