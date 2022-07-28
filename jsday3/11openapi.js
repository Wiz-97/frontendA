document.getElementById('search').addEventListener('click', function () {
    const query = document.getElementById('query').value
    const page = document.getElementById('page').value
    const size = document.getElementById('size').value
    //radio 버튼은 선택되었는지
    let sort = document.getElementById('accuracy').checked
    if (sort == true) sort = 'accuracy'
    else sort = 'recency'
    //${...}는 ...이 변수, 수식, 함수... 결과값을 구해서 출력
    alert(`query=${query}&page=${page}&size=${size}&sort=${sort}`)
    search(query,page,size,sort)        //새로운 검색을 위한 함수호출
})

const search = function (v1, v2, v3, v4) {
    //비동기 통신을 위한 객체 생성
    const xhr = new XMLHttpRequest();
    //1. HTTP 요청 초기화: method, url
    xhr.open("GET", `https://dapi.kakao.com/v2/search/vclip?query=${v1}&page=${v2}&size=${v3}&sort=${v4}`);
    //2. 요청 header 설정
    xhr.setRequestHeader("Authorization", "KakaoAK 997ddce7953c12285658d16be0e3261e");
    //xhr.setRequestHeader()
    //3. HTTP 요청 전송     : 추가적인 파라미터는 함께 전송
    xhr.send();
    //4. onload: 요청에 대한 응답이 왔을 때 실행될 onload 이벤트 핸들러 작성
    xhr.onload = function () {
        //응답코드가 200일 때만
        if (xhr.status == 200) {
            document.getElementById('list').innerHTML = ''
            let $response = JSON.parse(xhr.response)
            let results = $response.documents
            results.forEach(element => {
                const $ul = document.createElement('ul')
                const temp = `<li>${element.author}</li>
                <li>${element.title}</li>
                <li>${element.datetime}</li>
                <li>${element.play_time}</li>
                <li><a href=${element.url} target="_blank"><img src=${element.thumbnail} width="200px"></a></li>`
                //url은 a태그, thumbnail은 img 태그에 속성값으로 활용 가능

                $ul.innerHTML = temp                              //ul 태그 요소의 innerHTML 설정
                document.getElementById('list').appendChild($ul)//ul 태그 요소를 <p id="list"></p>의 자식요소로 추가
            })
        }
    }
}