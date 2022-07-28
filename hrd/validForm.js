//현재 날짜 new Date()
const today = new Date()
console.log(today)  //Thu Jul 28 2022 14:39:24 GMT+0900 (대한민국 표준시)
                    //20220728
console.log("년도 : " + today.getFullYear())                    
console.log("월 : " + (today.getMonth()+1))    //월 0~11                
console.log("일 : " + today.getDate())                    
let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')      
             //배열요소를 특정기호로 연결하기
console.log(result)
const month = (today.getMonth()+1).toString().padStart(2,0)
result = [today.getFullYear(),month,today.getDate()].join('-')
console.log(result)

//오늘날짜로 초기화
document.forms[0].regdate.value = result

function valid_check(){
    const frm = document.forms[0]
    const cust_no = frm.seq
    const name = frm.name
    const phone = frm.phone
    const addr = frm.addr
    const reg_date = frm.reg_date
    const grade = frm.grade
    const citycode = frm.citycode
    
    const month = (today.getMonth()+1).toString().padStart(2,0)
    let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('')
    let isValid = true

    if (name.value == ''){
        document.getElementById('name').innerHTML='필수 입력사항입니다.'
        name.focus()
        isValid = false
    }else{
        document.getElementById('name').innerHTML=''
    }
    var regex = /^010-[0-9]{4}-[0-9]{4}$/
    if (regex.test(phone.value)===false){
        // alert('전화번호를 -를 제외한 11자리를 입력해주세요.')
        document.getElementById('phone').innerHTML='휴대폰 번호 형식이 아닙니다.'
        phone.focus()
        isValid = false
    }else{
        document.getElementById('phone').innerHTML=''
    }
    if (addr.value == ''){
        // alert('주소를 입력해주세요.')
        document.getElementById('addr').innerHTML='필수 입력사항입니다.'
        addr.focus()
        isValid = false
    }else{
        document.getElementById('addr').innerHTML=''
    }
    if (reg_date.value = '' || reg_date.value != result){
        document.getElementById('reg_date').innerHTML='오늘과 같은 날짜를 골라주세요.'
        reg_date.focus()
        isValid = false
    }else{
        document.getElementById('reg_date').innerHTML=''
    }
    // if (grade.value == ''){
    //     alert('')
    //     grade.focus()
    //     isValid = false
    // }
    regex = /^[0-9]{2}$/
    if (regex.test(citycode.value)===false){
        document.getElementById('citycode').innerHTML='도시코드는 숫자 두자리 입니다.'
        citycode.focus()
        isValid = false
    }else{
        document.getElementById('citycode').innerHTML=''
    }
}