import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zonerweb.biz.id/api/image/cosplay?apikey=${global.zoner}`
	conn.sendFile(m.chat, url, '', '_Random Cosplay_', m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['random']
handler.help = ['cosplay']
handler.limit = true
export default handler