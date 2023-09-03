import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.zonerweb.biz.id/api/search/open-ai?text=${text}&apikey=${global.zoner}`)
    let zel = await res.json()
    let pesan = zel.text
   m.reply(pesan)
}
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(ai|openai)$/i
handler.limit = true
export default handler