import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Teksnya?'
  let res = `https://oni-chan.my.id/api/canvas/nekosad?text1=${response[0]}&text2=${response[1]}&apikey=`
  conn.sendFile(m.chat, res, 'yae.jpg', `Nih`, m, false)
}
handler.help = ['nekosad']
handler.tags = ['maker']
handler.command = /^(nekosad)$/i
handler.register = false

handler.limit = true

export default handler
