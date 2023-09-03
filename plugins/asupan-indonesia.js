import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.zonerweb.biz.id/api/asupan/indonesia?apikey=${global.zoner}`
	conn.sendFile(m.chat, url, 'url.jpg', '_Done_', m)
}
handler.command = /^(indonesia)$/i
handler.tags = ['random']
handler.help = ['indonesia']
handler.premium = false
handler.limit = true
 
export default handler