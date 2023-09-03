import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.twitterdl https://www.xnxx.com/video-141ewlbb/free_use_anytime_sex_big_ass_latina_milf_step_mom_after_deal_with_step_son*`
m.reply(wait)
  let res = await fetch(`https://api.zonerweb.biz.id/api/download/xnxx?url=${text}&apikey=${global.zoner}`)
  let json = await res.json()
  let datas = json.result
  conn.sendMessage(m.chat, { video: { url: datas.url }, caption: `Title: ${datas.title}\nDuration: ${datas.duration}\nquality: ${datas.quality}` }, { quoted: m })
  }
handler.help = ['xnxxvideo']
handler.tags = ['downloader']
handler.command = /^xnxxvideo|xnxxdl$/i
handler.premium = true

export default handler