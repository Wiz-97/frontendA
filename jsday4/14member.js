function valid_check() {
    const frm = document.forms[0];
    const name = frm.name.value
    const email = frm.email
    const password = frm.password
    const age = frm.age
    let isValid = true

    if (name.value == '') {
        alert('이름은 필수 입력입니다.')
        name.focus()
        isValid = false
    }

    if (password.value.length < 4) {
        alert('비밀번호는 4글자 이상입니다.')
        passowrd.focus()
        isValid = false
    }

    //이메일은 기호 @와 .을 포함해야함
    if (email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.endsWith('.') == -1) {
        alert('유효한 이메일을 입력해주세요')
        email.focus()
        isValid = false
    }

    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(email.value) == false) {
        alert('입력된 값은 이메일 형식이 아닙니다.')
    }
    // 정규 표현식은 // 안에 작성
    // ^는 시작지정
    // $는 끝지정
    // []는 [] 안의 문자들 중 1개 선택, [0-9a-zA-Z]는 숫자, 영문소문자, 영문대문자 중 1개
    // *는 0번 이상의 문자 반복
    // []?는 [] 안의 문자들이 있는가? 존재여부
    // ()는 그룹
    // {n}은 n개
    // {n,m}은 n개 이상, m개 이하

    if (age.value < 15 || age.value > 99) {
        alert('15세 이상 ~ 99세 미만 입력 가능합니다.')
        age.focus()
        isValid = false
    }

    //취미는 반드시 1개 이상 선택

    let cnt = 0
    frm.hobby.forEach(element => {
        if (element.checked)
            cnt++
    });
    if (cnt == 0) {
        alert('취미는 1개 이상 선택하셔야 합니다.')
        isValid = false
    }

    if (isValid) {
        frm.action = '13result.html'
        frm.submit()
    }

}