import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = `https://api.zonerweb.biz.id/api/nsfw/neko?apikey=${global.zoner}`
	conn.sendFile(m.chat, res, 'wikwik.jpg', '_Jangan Coli Ya..._', m)
} 
handler.command = /^(nekopoi)$/i
handler.tags = ['random']
handler.help = ['nekopoi']
handler.premium = true
handler.limit = true

export default handler