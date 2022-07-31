console.log('1.현재날짜와 시간(로컬)')
console.log(new Date())
console.log('2. 날짜를 직접 지정')
console.log(new Date(2022, 7, 12))
console.log(new Date('2022-07-12'))
console.log('3. 날짜와 시간')
console.log(new Date(2022, 6, 23, 16, 9, 30))
console.log('4. 세계표준시간 - UTC')
console.log(new Date().toUTCString())
console.log('5. 세계표준시간 - ISO')
console.log(new Date().toISOString)
console.log('6. 로컬 형식 (운영체제설정 국가)')
console.log(new Date().toLocaleString)
console.log('7. 날짜(시간 메소드)')
const today = new Date()
console.log('7-1) 년도: ' + today.getFullYear())
console.log('7-2) 월: ' + today.getMonth())
console.log('7-3) 일: ' + today.getDate())
console.log('7-4) 시: ' + today.getHours())
console.log('7-5) 분: ' + today.getMinutes())
console.log('7-6) 초: ' + today.getSeconds())
console.log('8. 날짜변경 메소드')
today.setFullYear(today.getFullYear() + 3)
console.log('1) 3년 후 날짜: ' + today)
today.setFullYear(today.getFullYear() - 3)
console.log('2) 3년 전 날짜: ' + today)

//탄생일 기준 +3000일은?
let mybirth = new Date('1997-03-16')
console.log('3) 나의 탄생일: ' + mybirth.toLocaleString())
mybirth.setDate(mybirth.getDate() + 10000)
console.log('4) 나의 탄생 10000일 기념일: ' + mybirth.toLocaleString())

//나는 태어난지 몇일?
mybirth = new Date('1997-03-16')
let diff = new Date() - mybirth
console.log('5) new Date() - mybirth')
console.log(diff + "ms")            //ms를 일로 바꾸기 -> 1일 = 24시간*60분*1000ms
const $1day = 24 * 60 * 60 * 1000
console.log('6)내가 태어난지 Day+' + Math.floor(diff / $1day) + "일")       //자바스크립트 반올림, 올림, 버림 메소드


today = new Date(2022,7,1)
console.log(today)          //Thu Jul 28 2022 14:39:24 GMT +0900(대한민국 표준시)
//20220728
console.log("년도: " + today.getFullYear())
console.log("월: " + (today.getMonth() + 1))
console.log("일: " + today.getDate())
//월,일 은 무조건 2자리 숫자로, 만약에 1~9이면 앞에 0 추가
const month = (today.getMonth() + 1).toString().padStart(2, 0)
const date = today.getDate().toString().padStart(2, 0)
let result = [today.getFullYear(), month, date].join('-')
//배열요소를 특정기호로 연결하기
console.log('9. 날짜형식 yyyy-mm-dd')
console.log(result)
console.log('10. 날짜형식 yyyymmdd')
result = [today.getFullYear(), month, date].join('')
console.log(result)