let target = document.querySelector("#dynamic");
// let stringArr=["Learn to HTML","Learn to CSS","Learn to JavaScript"
// ,"Learn to Ruby","Learn to Python"];
// let selectString=stringArr[Math. floor(Math.random()*stringArr.length)]; //*이후에 숫자넣어도 되고 원하는 걸 넣어라 만약 3넣으면 3미만의 랜덤 숫자가 나온다.
//Math.floor을 넣어야 소숫점 자리 사라짐 ex)3.462538 이런 거 방지
//원래 위에 3개 여기 있었는데 함수 안으로 이동함.

// let selectStringArr = selectString.split(""); //split의 의미는 해당문자열을(selectString) 이 기준("")을 이용해서 배열로 분리시켜라
//split(" ")이렇게 사용하면 단어 한 글자 한 글자 분리시켜진다.

function randomString(){
   
    let stringArr=["Learn to HTML","Learn to CSS","Learn to JavaScript"
    ,"Learn to Ruby","Learn to Python"];
    let selectString=stringArr[Math. floor(Math.random()*stringArr.length)]; //*이후에 숫자넣어도 되고 원하는 걸 넣어라 만약 3넣으면 3미만의 랜덤 숫자가 나온다.
    //Math.floor을 넣어야 소숫점 자리 사라짐 ex)3.462538 이런 거 방지
    let selectStringArr = selectString.split(""); //split의 의미는 해당문자열을(selectString) 이 기준("")을 이용해서 배열로 분리시켜라
    //split(" ")이렇게 사용하면 단어 한 글자 한 글자 분리시켜진다.

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());

}

//한 글자 씩 출력함수 
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length>0){
        target.textContent += randomArr.shift();//shift라는 속성을 사용하면 앞에서부터 빼낸다.배열의 앞의 값에서부터 빼내서 출력
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    } else{
        setTimeout(resetTyping,2000);
    }
}

dynamic(randomString());

// console.log(selectString); //얘는 문장이나오고 _____ 이제 쓸모를 다했으니 주석처리1
// console.log(selectStringArr); //얘는 알파벳 하나하나 쪼개져서 나온다  _________주석처리2

//커서 깜빡임 효과
    function blink (){
        target.classList.toggle("active");
    }

setInterval(blink,500); //커서가 반짝거리는 것처럼 보이게 만듦