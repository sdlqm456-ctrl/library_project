// Service에서 필요에 따라 DB에 접속 => mapper
const mariadb = require("../detabase/mppper.js");

// Server

//  도서 전체 목록
const findAll = async () => {
  // DB에서 데이터를 가져옴
  let list = await mariadb
    .query("selectBookList")
    .catch((err) => console.log(err));
  return list;
};
// 도서 상세정보
// 도서 등록
// 도서 수정
// 도서 삭제

module.exports = {
  // exports에 등록하지 않으면 외부로 노출되지 않음
  // router에서 사용 불가
  findAll,
};
