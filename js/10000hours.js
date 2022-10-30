const excBtn = document.querySelector(".btn-exc");

const input = document.querySelector(".cont-inp");
//폼
const wannabe = input.querySelector(".txt-wannabe");
//첫번재인풋 wannabe
const inpWannabe = input.querySelector(".input-wannabe");
// wannabe 내의 인풋
const inpTime = input.querySelector(".input-time");
// time 인풋

const result = document.getElementById("result");
const wannabeResult = document.querySelector(".result-wannabe");
const timeResult = document.querySelector(".result-time");
const goBtn = document.querySelector(".btn-go");
const modal = document.querySelector(".cont-modal");



function calc10000hours(){
    const userTime = parseInt(inpTime.value);
    timeResult.innerText= Math.ceil(10000/userTime);
}

function showResult(){
    // 유효성검사
    if(inpTime.value<=0||inpTime.value>24||isNaN(inpTime.value-1)||inpWannabe.value===" "){
        alert('제대로 입력하세요!!');
        return
    }
    result.classList.remove("hidden");
    wannabeResult.innerText = inpWannabe.value;
    calc10000hours();
    inpWannabe.value="";
    inpTime.value="";
}
excBtn.addEventListener("click",showResult);


goBtn.addEventListener("click",()=>{
    modal.classList.remove("hidden");
    document.body.classList.add("stop-scroll");
});


