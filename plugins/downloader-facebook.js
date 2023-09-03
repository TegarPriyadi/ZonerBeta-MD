import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan Linknya\nExample; ${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	m.reply(wait)
	let res = await fetch(`https://api.zonerweb.biz.id/api/download/facebook?url=${text}&apikey=${global.zoner}`)
  let data = await res.json()
  let result = data.result
  let video = result.url.urls[0]
  let cap = `_Done Videonya_`
  conn.sendMessage(m.chat, { video: { url: video }, caption: cap }, m)
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true

export default handler
