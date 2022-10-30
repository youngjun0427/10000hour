const excBtn = document.querySelector(".btn-exc");
// 나는 며칠동안 버튼
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

function calc10000hours() {
  const userTime = parseInt(inpTime.value);
  timeResult.innerText = Math.ceil(10000 / userTime);
}

function showResult(e) {
  e.preventDefault();
  // if (
  // inpWannabe.value == "" ||
  // 24 <= inpTime.value <= 0 ||
  // isNaN(inpTime.value) ||
  // !inpWannabe.value ||
  // inpWannabe.value == " "
  if (
    inpTime.value <= 0 ||
    inpTime.value > 24 ||
    isNaN(inpTime.value - 1) //  왜 -1?
    ||
    inpWannabe.value === " "
  ) {
    alert("제대로 입력하세요!!");
    return;
  }
  // {
  // alert("똑바로 써.");
  // return;
  // }

  result.classList.remove("hidden");
  wannabeResult.textContent = inpWannabe.value;
  calc10000hours();
}

function showModal(e) {
  modal.classList.remove("hidden");
  document.body.classList.add("stop-scroll");
}

goBtn.addEventListener("click", showModal);

excBtn.addEventListener("click", showResult);
