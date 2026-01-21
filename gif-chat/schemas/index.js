const mongoose = require('mongoose')

const connect = async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true)
    }

    await mongoose.connect(process.env.MONGO_URI)
    console.log('몽고DB 연결 성공')
  } catch (err) {
    console.error('몽고DB 연결 실패', err)
  }
}

mongoose.connection.on('error', (error) => {
  console.error('몽고DB 에러', error)
})

mongoose.connection.on('disconnected', () => {
  console.error('몽고DB 연결이 끊겼습니다. 재연결 시도')
  connect()
})

module.exports = connect