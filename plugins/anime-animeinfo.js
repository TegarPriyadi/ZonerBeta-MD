import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Masukan Nama query!!`;
  
  let res = await fetch(`https://api.zonerweb.biz.id/api/webanime/anime?query=${text}&apikey=${global.zoner}`);
  let json = await res.json();
  
  if (json.result.length === 0) {
    throw 'Anime tidak ditemukan.';
  }
  
  let info = json.result[7];
  
  // Membersihkan URL thumbnail dari duplikasi dengan menghapus "https://www.anime-planet.comhttps//"
  let bc = info.thumbnail.replace('https://www.anime-planet.comhttps//', 'https://www.anime-planet.com/');
  
  let ress = `*Title:* ${info.judul}\n*Thumbnail:* ${info.thumbnail}\n*Link:* ${info.link}`;
  
  conn.sendFile(m.chat, bc, 'Thumbnail.jpg', ress, m);
};

handler.help = ['animeinfo'];
handler.tags = ['anime'];
handler.command = /^(animeinfo)$/i;
handler.limit = true;

export default handler;
