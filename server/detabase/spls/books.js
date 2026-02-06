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
const selectBookOne = ``;
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
