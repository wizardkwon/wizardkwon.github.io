// API : Application Programming Interface


//open API
// ㄴ공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ...

// ajax : 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
let page = 1;
let size = 20;
const container = document.querySelector(".container");
const query = document.querySelector(".query");
const searchBox = document.querySelector(".search_box");
searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== ""){
        page = 1
        searchRequest(query.value, page);
    }
    query.value = "";
    
})

function searchRequest(query){
    console.log("query: ", query);
$.ajax({
      "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "KakaoAK 41c980bef2354a383155d4e7b7be48fa"
      },
    })
    .done((response) =>{
        console.log(response);

        $(".container").empty();
        for(let i=0;i<response.documents.length;i++){
            const thumbnail = response.documents[i].thumbnail;
            const title = response.documents[i].title;
            const description = response.documents[i].contents;
            const price = response.documents[i].price;
            const sale_price = response.documents[i].sale_price;
            const authors = response.documents[i].authors;
            const publisher = response.documents[i].publisher;
            
            const box = document.createElement("div");
            box.setAttribute("class","result_card");
           
            const img = document.createElement("img");
            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            const span = document.createElement("span");
            const sale = document.createElement("span");
            const bunri = document.createElement("span");
            const tempDiv = document.createElement("div");
            const tempP = document.createElement("p");
            const pAuth = document.createElement("span");
            const pPubl = document.createElement("span")
            const bunri2 = document.createElement("span");
            
            img.setAttribute("class","book_img");
            img.setAttribute("src",`${thumbnail}`);
            h4.setAttribute("class","book_title");
            p.setAttribute("class","book_description");
            span.setAttribute("class","price");
            sale.setAttribute("class","sale_price");
            pAuth.setAttribute("class","authors");
            pPubl.setAttribute("class","publisher");
            tempP.setAttribute("class","tempP");
            if(sale_price === -1){
                sale.setAttribute("style","display : none");
                span.setAttribute("style","text-decoration : none");
                bunri.setAttribute("style","display:none")
            }
            if(thumbnail === ""){
                box.setAttribute("style","display:none");
            }

            h4.innerText =`${title}`;
            p.innerText = `${description}`;
            span.innerText = `${price}원`;
            bunri.innerText = " | "
            bunri2.innerText = " | "
            sale.innerText = `${sale_price}원`;
            pAuth.innerText = `저자 : ${authors}`;
            pPubl.innerText = `제작사 : ${publisher}`;

            
            container.append(box);
            box.append(img);
            box.append(h4);
            box.append(p);
            box.append(tempDiv);
            tempDiv.append(span);
            tempDiv.append(bunri);
            tempDiv.append(sale);
            box.append(tempP);
            tempP.append(pAuth);
            tempP.append(bunri2);
            tempP.append(pPubl);

        }

        $(".paging").empty();
        let pageLength = response.meta.pageable_count;
        let pageCount = Math.ceil(pageLength/size);
        let pageContents = "";
        pageContents += '<img'; 
        if(page > 1){
        pageContents += ' class="before" src="images/before.png"';
        }
        pageContents += '>';
        pageContents += '<span>' +page + '/' + pageCount+'</span>';

        pageContents += '<img'; 
        if(response.meta.is_end === false){
            pageContents += ' class="after" src="images/after.png"';
        }
        pageContents += '>';
        $(".paging").append(pageContents);

        if(page > 1){
            const before = document.querySelector(".before");
            before.addEventListener("click",e =>{
                page--;
                searchRequest(query, page);
            })
        }
        if(response.meta.is_end === false){
            const after = document.querySelector(".after");
            after.addEventListener("click",e =>{
                page++;
                searchRequest(query, page);
            })
        }

    //     <div class="result_card">
    //     <img class="book_img" src="/book.png">
    //     <h4 class="book_title">도서 제목</h4>
    //     <p class="book_description">도서상세정보</p>
    //     <span class="price">1000원</span>
    //     <p class="book_info">
    //         <span class="autor">저자</span>|<span class="publisher">출판사</span>
    //     </p>
    // </div>
    });
}




