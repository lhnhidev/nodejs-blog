const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
    console.log('Kết nối thành công');
  } catch {
    console.log('Kết nối thất bại');
  }
};

module.exports = { connect };
