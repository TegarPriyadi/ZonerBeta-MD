import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Masukan Link\nExample: *.mf https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	m.reply(wait)
	let res = await fetch(`https://api.zonerweb.biz.id/api/download/mediafire?url=${args[0]}&apikey=${global.zoner}`)
	let data = await res.json()
	let json = data.result
	conn.sendFile(m.chat, json.link, json.nama, '', m, null, { mimetype: json.link, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
