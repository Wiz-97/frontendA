//전역변수 선언할 위치
//자바스크립트 데이터 타입은 바뀔 수 있음
let days = document.forms[0].days
console.log(typeof days)
console.log(typeof days.value)
days=parseInt(days.value)
console.log(typeof days)
// 이상 동적타입 확인 코드

days = document.forms[0].days   //object
let start = documnet.forms[0].start
//선택할 수 있는 입실날짜의 범위 설정 min 속성값 ~ max 속성값
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)
start.max = dateFormat(today)

function daySelect(){
    alert('숙박일수 ' + days.value + "일 입니다.")
    console.log('숙박일수 ' + days.value + '일 입니다.')
    if(start.value != '')
        endOutput()
}

function endOutput(){
    //parseInt()        :select에서 선택한 값은 typeof가 string
    let end = new Date(start.value)     //선택한 입실날짜로 Date 객체 생성
    console.log('입실날짜: ' + end)
    end.setDate(end.getDate() + parseInt(days.value))
    console.log('퇴실날짜: ' + end)
    console.log('퇴실날짜 dateFormat: ' + dateFormat(end))
    document.forms[0].end.value=dateFormat(end)
}


function dateFormat(someday){           //날짜타입 new Date() 인자
    const month = (someday.getMonth()+1).toString().padStart(2,0)
    const date = someday.getDate().toString().padStart(2,0)
    let result = [someday.getFullYear(),month,date].join('-')
                //배열요소를 특정기호로 연결하기
    console.log("dateFormat: " + result)
    return result
}