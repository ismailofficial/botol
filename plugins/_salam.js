let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.text.toLowerCase() == 'titit') {
    m.reply(`HAI KAK @${m.sender.replace(/@.+/, '')} ADA YG BISA KAMI BANTU?? , KETIK #MENU UNTUK MEMULAI BOT`) 
}
  return true
}

module.exports = handler
