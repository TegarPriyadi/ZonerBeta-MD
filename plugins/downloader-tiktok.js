import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw 'Linknya Mana?';

  try {
    m.reply('Sedang mengunduh...');
    let res = await fetch(`https://api.zonerweb.biz.id/api/download/tiktok?url=${encodeURIComponent(text)}&apikey=${global.zoner}`);
    let json = await res.json();
    
    if (!json.status) throw 'Gagal mengunduh video TikTok. Pastikan URL yang Anda masukkan benar.';
    
    let { title, description, video, audio } = json.result;
    let cap = `*Username:* ${title}\n*Description:* ${description}`;
    
    await conn.sendFile(m.chat, video[0], 'tiktok.mp4', cap, m, false, { mimetype: 'video/mp4' });
    await conn.sendFile(m.chat, audio[0], 'tiktok.mp3', '', m, false, { mimetype: 'audio/mp3' });
  } catch (error) {
    throw error;
  }
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^tiktok|tt|ttdl|tiktokdl$/i;
handler.limit = true;

export default handler;
