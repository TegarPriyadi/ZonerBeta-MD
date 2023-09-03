import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zonerweb.biz.id/api/asupan/korea?apikey=${global.Zoner}`
	conn.sendFile(m.chat, url, 'url.jpg', '_Done_', m)
}
handler.command = /^(korea)$/i
handler.tags = ['random']
handler.help = ['korea']
handler.premium = false
handler.limit = true

export default handler