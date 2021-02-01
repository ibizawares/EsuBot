let handler = async m => m.reply(`
╭─「 Ibizawares • APOYAME:) 」
│ • My canal de youtube:
│ • [https://youtube.com/channel/UChAGpQT2Upc-5m1p9x02djg]
│ 
│ • My Facebook:
│ • [https://www.facebook.com/agus.ochoa.94]
│
│ • My grupo de Whatsapp:
│ • [https://chat.whatsapp.com/KOh7MTJ1tnS9TvvJG3iGbG]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ibizawares']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
