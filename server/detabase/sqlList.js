// table <=> file
const books = require("./spls/books.js");

module.exports = {
  // 펼침연산자 (spread operator, ...) 을 활동
  ...books,
};
