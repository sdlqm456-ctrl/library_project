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
// 도서 단건 조회 (북 번호 기준)
const findByBookNo = async (bookNo) => {
  // bookNo : 사용자가 전달한 북번호, Number 타입
  let list = await mariadb
    .query("selectBookOne", bookNo)
    .catch((err) => console.log(err));
  // mariadb 모듈의 경우 SELECT문의 결과는 갯수와 상관
  // -> 서비스의 결과로 값이 하나일 경우 변환이 필요함
  let info = list[0];
  return info;
};
// 도서 상세정보

// 도서 등록
// 도서 수정
// 도서 삭제

module.exports = {
  // exports에 등록하지 않으면 외부로 노출되지 않음
  // router에서 사용 불가
  findAll,
  findByBookNo,
};
