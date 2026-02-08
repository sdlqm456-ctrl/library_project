// Express의 Router 모듈
const express = require("express");
const router = express.Router();

// 해당 라우터를 통해 제공할 서비스를 가져옴
const bookServise = require("../services/book_service.js");

// 도서 전체 조회: URI, METHOD
router.get(`books`, async (req, res) => {
  // 제공할 서비스 실행
  // 결과 반환
  let bookList = await bookServise.findAll().catch((err) => console.log(err));
  res.send(bookList);
});

// 도서 상세 조회

// 도서 등록

// 도서 수정

// 도서 삭제

// 다른 파일에서 require()을 통해 가져옴
module.express = router;
