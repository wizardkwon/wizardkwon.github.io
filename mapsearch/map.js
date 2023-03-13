const container = document.querySelector(".container");
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
    "url": "https://dapi.kakao.com/v2/local/search/address?query=서울",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "KakaoAK e70d7efddfbe85256b3f52f883467377"
    },
  }).done(function (response) {
    $(".container").empty();
    console.log(response);
    const mapBox = document.createElement("div");
    mapBox.setAttribute("class","map");


    container.append(mapBox);
  });
}