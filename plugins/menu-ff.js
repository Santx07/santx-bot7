import fetch from 'node-fetch';


const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.menu_anime

  try {
    const pp = imagen2;
    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
╭━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╮
                  𝕊𝔸ℕ𝕋𝕏 𝔹𝕆𝕋 🤖
╰━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╯

     ㅤ   ◥◣◆◢◤
     ◢████████◣
  ◢██████████◣
 ◥███████████◤
  ◥██████████◤
     ◥████████◤
   ㅤ    ◥████◤     

╔══════════════════════╗
║        🎮 𝕄𝔼ℕ𝕌 | 𝕍𝔼ℝ𝕊𝕌𝕊 🎮           ║
╚══════════════════════╝

┏━━ 𝕄𝔸ℙ𝔸 𝔾ℝ𝔸ℕ𝔻𝔼 ━━━┓
   ➤ .vs12n   ➤ .cuadri       
   ➤ .vs12b   ➤ .hexa       
   ➤ .vs16n   ➤ .trila 
   ➤ .vs16b   ➤ .scrim       
┗━━━━━━━━━━━━━━━━┛

     ☁ ℝ𝔼𝔾𝕀Óℕ 𝕊𝕌ℝ ☁

┏━━━━━━ 𝕍Í𝕍𝕀𝔻𝕆 ━━━━━┓
   ➤ .4vs4a1   ➤ .4vs4a4         
   ➤ .4vs4a2   ➤ .4vs4a5         
   ➤ .4vs4a3   ➤ .4vs4a6         
┗━━━━━━━━━━━━━━━━━┛

┏━━━━━ 𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕆 ━━━━━┓
   ➤ .4vs4b1  ➤ .4vs4b4    
   ➤ .4vs4b2  ➤ .4vs4b5    
   ➤ .4vs4b3  ➤ .4vs4b6     
┗━━━━━━━━━━━━━━━━━┛

    ⭐ ℝ𝔼𝔾𝕀Óℕ ℕ𝕆ℝ𝕋𝔼 ⭐

┏━━━━━━━ ℂ𝕃𝕂 ━━━━━━┓
   ➤ .4vs4n1    ➤ .4vs4n4       
   ➤ .4vs4n2   ➤ .4vs4n5       
   ➤ .4vs4n3   ➤ .4vs4n6       
┗━━━━━━━━━━━━━━━━┛

┏━━━━━ 𝕀ℕ𝔽𝕀ℕ𝕀𝕋𝕆 ━━━━━┓
   ➤ .4vs4d1   ➤ .4vs4d4        
   ➤ .4vs4d2   ➤ .4vs4d5       
   ➤ .4vs4d3   ➤ .4vs4d6       
┗━━━━━━━━━━━━━━━━━┛

╭━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╮
   ¡𝔻𝕚𝕤𝕗𝕣𝕦𝕥𝕒 𝕦𝕤𝕒𝕟𝕕𝕠 𝕊𝔸ℕ𝕋𝕏 𝔹𝕆𝕋!
╰━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━╯
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto1[3], m);
  }
};
handler.command = /^(menuff|menuff|SANTvs)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
