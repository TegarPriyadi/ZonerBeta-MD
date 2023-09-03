import fetch from 'node-fetch';

let handler = m => m;

handler.before = async (m) => {
  let chat = global.db.data.chats[m.chat];
  if (chat.simi && !chat.isBanned) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    if (!m.text) return;
    let api = await fetch(`https://api.zonerweb.biz.id/api/search/simi?text=${encodeURIComponent(m.text)}apikey=${global.zoner}`);
    if (!api.ok) throw new Error('Error fetching data');
    let res = await api.json();
    if (res.result && res.result.message) {
      return m.reply(res.result.message);
    } else {
      return m.reply('Tidak ada respons yang valid.');
    }
  }
  return true;
};

export default handler;
