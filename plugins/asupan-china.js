import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zonerweb.biz.id/api/asupan/china?apikey=${global.zoner}`
	conn.sendFile(m.chat, url, 'ini.jpg', '_Done_', m)
}
handler.command = /^(china)$/i
handler.tags = ['random']
handler.help = ['china']
handler.premium = false
handler.limit = true

export default handler