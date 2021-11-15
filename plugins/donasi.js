let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [0858-2061-2056]
┣➥ *Gopay:* [0858-2061-2056]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281254478985*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler