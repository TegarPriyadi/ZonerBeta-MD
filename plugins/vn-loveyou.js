import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://bucin-livid.vercel.app/audio/lopyou.mp3', "lopyou.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(lopyou|lopyu|loveyou|love|lope)$/i;
handler.command = new RegExp();

export default handler;
