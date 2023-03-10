// API : Application Programming Interface


//open API
// ㄴ공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ...

// ajax : 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
let page = 1;
const query = document.querySelector(".query");
const searchBox = document.querySelector(".search_box");
searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== ""){
        page = 1
        searchRequest(query.value, page);
    }
    
})

function searchRequest(query){
    console.log("query: ", query);
$.ajax({
      "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=titl`,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "KakaoAK 41c980bef2354a383155d4e7b7be48fa"
      },
    })
    .done((response) =>{

    //  container 안에
    //     <div class="result_card">
    //     <img class="book_img" src="/book.png">
    //     <h4 class="book_title">도서 제목</h4>
    //     <p class="book_description">도서상세정보</p>
    //     <span class="price">1000원</span>
    //     <p class="book_info">
    //         <span class="autor">저자</span>|<span class="publisher">출판사</span>
    //     </p>
    //     </div>

    // 새로 샹성 및 구성 완료한 result_card 요소를 추가

    });
}
