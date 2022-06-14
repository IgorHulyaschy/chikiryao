const TelegramApi = require('node-telegram-bot-api')

// const bot1 = new TelegramApi(process.env.TELEGRAM_BOT1, { polling: true })

const bot2 = new TelegramApi('5386093998:AAGExW2U0KRia3HpdQIav496ZA-ncEIouDQ', { polling: true })

// const connectToRabbit = async  () => { 
//   const queue = 'queue'
//   const conn = await amqplib.connect(process.env.AMQP_URL)
//   const sender = await conn.createChannel()
//   const receiver = await conn.createChannel()
//   await receiver.assertQueue(queue)
//   return { sender, receiver }
// }

bot2.onText(/\/Tazasho)/, async (msg) => {
  const chatId = msg.chat.id
  await bot2.sendPhoto(chatId, 'https://static3.tgstat.ru/channels/_0/f2/f2bfb93b7b7df8f8c16ac1ceaabe428d.jpg')
})

// bot1.onText(/\Стартуем/, async (msg) => {
//   const chatId = msg.chat.id
//   const text = msg.text
//   bot1.sendPhoto(chatId, 'http://risovach.ru/upload/2013/12/mem/natalya-morskaya-pehota_38147160_big_.jpeg')
//   console.log(text, msg.chat)
//   const { sender, receiver } = await connectToRabbit()
//   sender.sendToQueue('queue', Buffer.from(String(chatId)))
//   receiver.consume('queue', async (msg) => {
//     if (msg !== null) {
//       console.log('Recieved:', msg.content.toString());
//       bot2.sendPhoto(msg.content.toString(), 'https://static3.tgstat.ru/channels/_0/f2/f2bfb93b7b7df8f8c16ac1ceaabe428d.jpg')
//       receiver.ack(msg);
//     } else {
//       console.log('Consumer cancelled by server');
//     }
//   })
//   setInterval(() => {
//     receiver.consume('queue', async (msg) => {
//       if (msg !== null) {
//         console.log('Recieved:', msg.content.toString());
//         bot2.sendPhoto(msg.content.toString(), 'https://static3.tgstat.ru/channels/_0/f2/f2bfb93b7b7df8f8c16ac1ceaabe428d.jpg')
//         receiver.ack(msg);
//       } else {
//         console.log('Consumer cancelled by server');
//       }
//     })
//   }, 1000*60*15) //15min
// })

// setInterval(() => {
//   bot1.sendPhoto(766729939, 'https://static3.tgstat.ru/channels/_0/f2/f2bfb93b7b7df8f8c16ac1ceaabe428d.jpg')
// }, 500)