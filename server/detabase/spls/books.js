// Table: t_table_01

// `` (백틱) 사용

// 조건없이 전체 조회
const selectBookList = `
select no 
        ,name
          , writer 
          , publisher
          , publication_date
          , info 
from t_book_01
order by no
`;

// PRIMARY KEY를 활용한 단건조회
// ? 은 대체될 값이 들어갈 위치 지정
// 1) ?의 총 갯수
// -1) 1개 : 배열이 아닌 단일 값
// -2) 2개 이상 : 배열
// 2) 각 ?의 위치
// -1) ? 에 대체할 값이 입력될 컬럼이 명확할 경우 : 기본값(문자, 숫자, 날짜)
// -2) ? 에 대체할 값이 입력될 컬럼이 명확하지 않을 경우 : 객체, 필드명이 컬럼명이 됨
// ?의 총 갯수는 1개이고 대체할 값이 입력될 컬럼은 no로 명확함 : 단일 기본값(숫자)
const selectBookOne = `select no 
        ,name
          , writer 
          , publisher
          , publication_date
          , info 
from t_book_01
where no = ?`;
// 등록
const bookInsert = ``;

// 수정
const bookUpdate = ``;

// 삭제
const bookDelete = ``;

module.exports = {
  selectBookList,
  selectBookOne,
  bookInsert,
  bookUpdate,
  bookDelete,
};
