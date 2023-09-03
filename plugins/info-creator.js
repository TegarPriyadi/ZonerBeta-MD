import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName('6283175391085@s.whatsapp.net')}`, `TegarPriyadi `, `Developer Website`, `api.zoner@gmail.com`, `Indonesia`, `https://api.zonerweb.biz.id/`, `Developer ZonerBot™ & Penyedia APis`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam&call`, `Nothing`, `Indonesia`, `https://api.zonerweb.biz.id/`, `Hanya Bot Pasaran Yang Sering Error`]
  ], m)
  await conn.sendFile(m.chat, "https://cdn.pixabay.com/download/audio/2022/07/11/audio_532e21f350.mp3", 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler