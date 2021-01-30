let handler = async m => m.reply(`
╭─「 Donar • ibizawares 」
│ • Paypal [https://www.paypal.me/ibizawares]
│ • Hablame al priv [wa.me/+522741091314]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
