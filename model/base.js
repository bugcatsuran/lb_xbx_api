
const mongoose = require('mongoose')

const dbName = 'mongodb://localhost/xbx'

mongoose.connect(dbName)

const db = mongoose.connection

db.on('error', (error) => {
  console.error(error);
  setTimeout(() => {
    process.exit(1);
  }, 500);
});

db.once('open', () => {
  console.log('Mongodb 连接成功')
});