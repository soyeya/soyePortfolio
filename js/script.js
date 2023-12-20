
const resizeEvet = () => {

  const window_width = window.innerWidth;
  console.log(window_width);

};

resizeEvet();

window.addEventListener("resize" , function(){

  resizeEvet();
  console.log('resizeEvet');

});


/* typing Evet*/

const letters1 = document.querySelectorAll(".letterSpace1 em");

window.addEventListener("load" , function(){

  function letterEvet1(){

   for(let i = 0; i <= letters1.length; i++){

     if(i < letters1.length){

      setTimeout(() => {

        letters1[i].classList.add("active");

      }, `${i}00`);

        }
       };
      };

  letterEvet1();


});


/* scroll Evet */

const introduceLetter = document.querySelector(".letters");
const weatherBack = document.getElementById("weatherApi");
const titleName = document.querySelector(".titleName");
const tdweater = document.querySelector(".tdweater");



window.addEventListener("scroll" , (evt) => {

  const nowScrollY = window.scrollY;
  console.log(nowScrollY);
  evt.preventDefault;

if(nowScrollY > 600){

  introduceLetter.classList.add("active");

}else{

  introduceLetter.classList.remove("active");

}
if(nowScrollY > 1300){

  weatherBack.classList.add("change");
  tdweater.classList.add("change");

}else{

  weatherBack.classList.remove("change");
  tdweater.classList.remove("change");
}

});


/* Weather Api*/

let weatherBox = document.querySelector(".weather");
const tdSky = document.getElementById("tdSky");
const tdTemp = document.getElementById("tdTemp");
const tdRain = document.getElementById("tdRain");
const tdWindy = document.getElementById("tdWindy");
const tdDays = document.getElementById("tdDays");
const ootdBox = document.querySelector(".ootdBox");


let today = new Date();
console.log(today);

let dates = today.getDate();
const days  = today.getDay();
const months  = today.getMonth() + 1;
const years  = today.getFullYear();
const today_watch = [today.getHours() + "00"];
console.log(today_watch);

const timeContent =  Number(today_watch);
console.log(timeContent);

if(dates < 10){

 dates = ["0" + today.getDate()];
 console.log(dates);

};
const Days_array = [ "Sunday",  "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday"];
const Month_array = [ "January" , "February" , "March" , "April" , "May" , "Jun" , "July" , "August" , "September" , "Octobor" , "November" , "December"]

const nowDays = Days_array[days];
const nowMonths = Month_array[months];

var all_day = {

   Dates : [dates],
   Days : [nowDays],
   Months : [months],
   Years : [years]
}

console.log(all_day.Dates);
console.log(all_day.Days);
console.log(all_day.Months);
console.log(all_day.Years);

var TimeTable = "";

function weatherTime(){

if(timeContent <= 200 || timeContent <= 300 || timeContent <= 400){

  TimeTable = "0200";

}else if(timeContent <= 500 || timeContent <= 600 || timeContent <= 700){
  
  TimeTable = "0500";

}else if(timeContent <= 800 || timeContent <= 900 || timeContent <= 1000){
  
  TimeTable = "0800";

}else if(timeContent <= 1100 || timeContent <= 1200 || timeContent <= 1300){
  
  TimeTable = "1100";

}else if(timeContent <= 1400 || timeContent <= 1500 || timeContent <= 1600){
  
  TimeTable = "1400";

}else if(timeContent <= 1700 || timeContent <= 1800 || timeContent <= 1900){
  
  TimeTable = "1700";

}else if(timeContent <= 2000 || timeContent <= 2100 || timeContent <= 2200){
  
  TimeTable =  "2000";

}else if(timeContent <= 2300 || timeContent <= 2400){
  
  TimeTable =  "2300";

}else{

  console.log('전송오류');
}

console.log(TimeTable);
 
};

weatherTime();

      const allToday = all_day.Years + all_day.Months + all_day.Dates;
      console.log(allToday);
      const SERVICE_KEY = `YoydCVXD8oU6UaQUlDTq3fKhhTqVTHnG3zEp2CPT4l5OpgfWmpJxINRotG7wMSPjNMeHVrXqFumuDhHWxoZikw%3D%3D`;
      const API_URL = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=12&dataType=JSON&base_date=${allToday}&base_time=${TimeTable}&nx=60&ny=127`;


const weatherImg = [

  "./img/icon1.svg",
  "./img/icon2.svg",
  "./img/icon3.svg",
  "./img/icon4.svg",
  "./img/icon5.svg",
  "./img/icon6.svg",
  "./img/icon7.svg",
];

let weatherIcon = document.querySelector(".weatherIcon");


async function getWeather() {
  

  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
  console.log((data.response.body.items));
  console.log((data.response.body.items.item));

  const today_sky = (JSON.stringify(data.response.body.items.item[5].fcstValue));
  const today_temp = (JSON.stringify(data.response.body.items.item[0].fcstValue));
  const today_rain = (JSON.stringify(data.response.body.items.item[6].fcstValue));
  const today_windy = (JSON.stringify(data.response.body.items.item[4].fcstValue)); //정확하게 가져오려는 데이터의 이름을 차례로 기입해야함
  const skyBox = today_sky;
  console.log(typeof(skyBox));
  console.log(today_temp);

 const changeTemp = today_temp.trim().split("").sort().join("").slice(2);
 console.log(changeTemp);
 const resultTemp = Number(changeTemp);
 console.log(resultTemp);

  const rainBox = today_rain;
  console.log(rainBox);

  var Sky = "";
  var Rain  = "";

function skyContent(){

  if(skyBox == '"1"'){

      Sky += `맑음`;   
      weatherIcon.innerHTML =  `<img src=${weatherImg[0]} alt="img1" class="nowIcon">`;   

  }else if(skyBox == '"2"'){

      Sky += `구름많음`;  
      weatherIcon.innerHTML =  `<img src=${weatherImg[4]} alt="img1" class="nowIcon">`; 

  }else if(skyBox == '"3"'){

      Sky += `구름과 흐림 그 사이`;  
      weatherIcon.innerHTML =  `<img src=${weatherImg[1]} alt="img1" class="nowIcon">`; 

  }else if(skyBox == '"4"'){

      Sky += `흐림`;  
      weatherIcon.innerHTML =  `<img src=${weatherImg[4]} alt="img1" class="nowIcon">`; 

  }else{

     console.log('skybox 전송오류');
  }


 };

 skyContent();


  function rainContent(){

      if(rainBox == '"0"'){
  
          Rain += `없음`;     
  
      }else if(rainBox == '"1"'){
          Rain += `있음`; 
  
      }else if(rainBox == '"2"'){
  
          Rain += `비/눈있음`; 
  
      }else if(rainBox == '"3"'){
  
          Rain += `눈소식있음`; 
  
      }else if(rainBox == '"4"'){
  
          Rain += `소나기`; 
  
      }else{
  
         Rain += ``; 
         console.log('잘못된 전송2');
  
      }};
  
      rainContent();

//ootd

const Link = {

  aLink : ["https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=padding%20fashion&eq=padding%20fas&etslf=9182",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=coat%20outfit&eq=coat&etslf=6905",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=jacket%20outfit&eq=jaket%20outfit&etslf=5986",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=knit%20outfit&eq=knit%20out&etslf=4285",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=mtm%20outfit&eq=mtm&etslf=4747",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=cardigan%20outfit&eq=cardian&etslf=4495",
"https://www.pinterest.co.kr/search/pins/?rs=ac&len=2&q=t%20shirt%20outfit&eq=t-shirt&etslf=36008"],

  src : ["./img/paddingVideo.mp4", "./img/coatOutfit.mp4" , "./img/jacketOutfit.mp4" ,"./img/knitOutfit.mp4" ,"./img/mtmOutfit.mp4" , "./img/cardiganOutfit.mp4" , "./img/tshirtOutfit.mp4"],
  text : ["Padding Outfit" , "Coat Outfit" , "Jacket Outfit" , "Knit Outfit" , "Mtm Outfit" , "Cardigan Outfit" , "T-Shirt Outfit"]
}

function ootdVideo(){


 if(resultTemp < 5 ){

  ootdBox.innerHTML = `<a href="${Link.aLink[0]}" target="_blank"><video src="${Link.src[0]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[0]}</span></a>`;

 }else if( resultTemp == 5 || resultTemp < 9){

  ootdBox.innerHTML = `<a href="${Link.aLink[1]}" target="_blank"><video src="${Link.src[1]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[1]}</span></a>`;

 }else if( resultTemp == 9 || resultTemp < 12){

  ootdBox.innerHTML = `<a href="${Link.aLink[2]}" target="_blank"><video src="${Link.src[2]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[2]}</span></a>`;
 
}else if( resultTemp == 12 || resultTemp < 17){

  ootdBox.innerHTML = `<a href="${Link.aLink[3]}" target="_blank"><video src="${Link.src[3]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[3]}</span></a>`;
 
}else if( resultTemp == 17 || resultTemp < 20){

  ootdBox.innerHTML = `<a href="${Link.aLink[4]}" target="_blank"><video src="${Link.src[4]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[4]}</span></a>`;
 
}else if( resultTemp == 20 || resultTemp < 23){

  ootdBox.innerHTML = `<a href="${Link.aLink[5]}" target="_blank"><video src="${Link.src[5]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[5]}</span></a>`;
 
}else if( resultTemp >= 23){

  ootdBox.innerHTML = `<a href="${Link.aLink[6]}" target="_blank"><video src="${Link.src[6]}" id="ootdVideo" autoplay loop muted></video><span>${Link.text[6]}</span></a>`;
 
}


}

ootdVideo();

  tdDays.textContent = `${all_day.Years}년 ${all_day.Months}월 ${all_day.Dates}일 ${Days_array[days]}`;
  tdSky.textContent =  Sky;
  tdTemp.textContent = `${today_temp} °C`;
  tdRain.textContent = Rain;
  tdWindy.textContent = `${today_windy} ms`;



};

getWeather();



/* Slider */

let sliderContent = document.querySelector(".sliderCont");
let slideList = document.querySelectorAll(".sliderCont li");

const webBtn = document.getElementById("webBtn");
const reactBtn = document.getElementById("reactBtn");
const vueBtn = document.getElementById("vueBtn");

const sliderName = document.querySelector("#titleSkills");


const slideWidth = 10;
const slideMargin = 2;
const slideLength = slideList.length;
let slideCurrent = 0;
webBtn.classList.add("active");

const changeBtnColor = () => {

if( slideCurrent >= 0){

   webBtn.classList.add("active");
   reactBtn.classList.remove("active");
   vueBtn.classList.remove("active");
   sliderName.textContent = "Html5 css javascript";

}if(slideCurrent >= 3){

   reactBtn.classList.add("active");
   webBtn.classList.remove("active");
   sliderName.textContent = "React";


}if(slideCurrent >= 6){

  vueBtn.classList.add("active");
  webBtn.classList.remove("active");
  reactBtn.classList.remove("active");
  sliderName.textContent = "Vue";

}

 
}


const movingSlider = () => {

const movingScreen = - slideCurrent * (slideWidth + slideMargin);
console.log(movingScreen);

sliderContent.style.transform = `translateX(${movingScreen}%)`;
sliderContent.classList.add("move");
slideCurrent++;
console.log(slideCurrent);

  if(slideCurrent == slideLength){

      sliderContent.style.transform = `translateX(0px)`;
      slideCurrent = 0;

  }

  setTimeout(() => {

      sliderContent.classList.remove("move");
      console.log('transform삭제');

  },800);

  changeBtnColor();

  
};

const sliderController = () => {

  sliderContent.onmouseenter  = function(){

  sliderContent.addEventListener("mousedown" , movingSlider);

  };

  sliderContent.onmouseleave  = function(){

      sliderContent.removeEventListener("mousedown" , movingSlider);

  };

};

sliderController();

webBtn.addEventListener("click" , function(){

  slideCurrent = 0;
  movingSlider();
  this.classList.add("active");
  reactBtn.classList.remove("active");
  vueBtn.classList.remove("active");

});

reactBtn.addEventListener("click" , function(){

  slideCurrent = 3;
  movingSlider();
  this.classList.add("active");
  webBtn.classList.remove("active");
  vueBtn.classList.remove("active");

});

vueBtn.addEventListener("click" , function(){

  slideCurrent = 6;
  movingSlider();
  this.classList.add("active");
  webBtn.classList.remove("active");
  reactBtn.classList.remove("active");

});


/* Wordle Game */

const gameOverpage = document.getElementById("gameover");
gameOverpage.style.display = "none";

let answer = [

 {
   letter : "adult",
   info : "만 19세 이상 성인을 일컫는 말",
 },
 {
   letter : "cloth",
   info : "주변의 위험이나 환경으로부터 몸을 보호하기 위해 걸치는 것",
 },
 {
   letter : "world",
   info : "지구촌, 모든 나라를 통칭하는 말",
 },
 {
   letter : "music",
   info : "전자기기 혹은 악기를 통해 듣는 것",
 },
 {
   letter : "plate",
   info : "음식을 담기 위해 쓰이는 도구",
 }

];


const wordleBox = document.querySelectorAll(".pieceBox");
const wordleStartBtn = document.getElementById("startBtn");
const wordleSubmit = document.getElementById("answer");
const restartBtn = document.querySelector(".retry");
const infoText = document.querySelector(".wordInfo p");
const scoreBox = document.querySelectorAll(".tryCont em");
const totalScore = document.querySelector(".scroeCont em");

wordleBox[0].classList.remove("close");
wordleBox[1].classList.add("close");
wordleBox[2].classList.add("close");
wordleBox[3].classList.add("close");
wordleBox[4].classList.add("close");


/* wordle 단어함수 */

var wordle_array1 = [];

const wordleComponent1 = () => {

  const pieceInputList1 = document.querySelectorAll(".piece1");

  for(let i = 0; i < pieceInputList1.length; i++){
      
      var inputValue = pieceInputList1[i].value;

      if(inputValue == answer[0].letter[i]){

          pieceInputList1[i].classList.add("green");
          pieceInputList1[i].classList.remove("yellow");
          pieceInputList1[i].classList.remove("gray");
          wordle_array1.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


      }else if(answer[0].letter.includes(inputValue || answer[0].letter.indexOf(inputValue))){
      
          pieceInputList1[i].classList.add("yellow");
          pieceInputList1[i].classList.remove("green");
          pieceInputList1[i].classList.remove("gray");

      }else if(answer[0].letter.indexOf(inputValue) == -1){

          pieceInputList1[i].classList.add("gray");
          pieceInputList1[i].classList.remove("green");
          pieceInputList1[i].classList.remove("yellow");

      }else{

          pieceInputList1[i].classList.remove("green");
          pieceInputList1[i].classList.remove("yellow");
          pieceInputList1[i].classList.remove("gray");
      }
  }

  //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

  let result1 = wordle_array1.join("");
  let result_value1 = result1.match("adult");

  if( result_value1 != null){

    for(let i = 0; i < pieceInputList1.length; i++){

      pieceInputList1[i].classList.remove("yellow");
      pieceInputList1[i].classList.remove("gray");
      infoText.innerHTML = "sucess";
      wordleBox[0].classList.add("sucess");
      
      setTimeout(() => {

        wordleBox[1].classList.remove("close");
      
      },500);

      console.log('동작중1');

    };


  };

  wordle_array1 = []; //array_값을 비워준다. 

};



var wordle_array2 = [];

const wordleComponent2 = () => {

  const pieceInputList2 = document.querySelectorAll(".piece2");

  for(let i = 0; i < pieceInputList2.length; i++){
      
      var inputValue = pieceInputList2[i].value;

      if(inputValue == answer[1].letter[i]){

          pieceInputList2[i].classList.add("green");
          pieceInputList2[i].classList.remove("yellow");
          pieceInputList2[i].classList.remove("gray");
          wordle_array2.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


      }else if(answer[1].letter.includes(inputValue || answer[1].letter.indexOf(inputValue))){

          pieceInputList2[i].classList.add("yellow");
          pieceInputList2[i].classList.remove("green");
          pieceInputList2[i].classList.remove("gray");

      }else if(answer[1].letter.indexOf(inputValue) == -1){

          pieceInputList2[i].classList.add("gray");
          pieceInputList2[i].classList.remove("green");
          pieceInputList2[i].classList.remove("yellow");

      }else{

          pieceInputList2[i].classList.remove("green");
          pieceInputList2[i].classList.remove("yellow");
          pieceInputList2[i].classList.remove("gray");
      }

  }

  //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

  let result2 = wordle_array2.join("");
  let result_value2 = result2.match("cloth");

  if( result_value2 != null){

    for(let i = 0; i < pieceInputList2.length; i++){

      pieceInputList2[i].classList.remove("yellow");
      pieceInputList2[i].classList.remove("gray");
      infoText.innerHTML = "sucess";
      wordleBox[1].classList.add("sucess");
      
      setTimeout(() => {

        wordleBox[2].classList.remove("close");
      
      },500)

      console.log('동작중2');

    };

  };

  wordle_array2 = []; //array_값을 비워준다. 


};


var wordle_array3 = [];

const wordleComponent3 = () => {

  const pieceInputList3 = document.querySelectorAll(".piece3");

  for(let i = 0; i < pieceInputList3.length; i++){
      
      var inputValue = pieceInputList3[i].value;

      if(inputValue == answer[2].letter[i]){

          pieceInputList3[i].classList.add("green");
          pieceInputList3[i].classList.remove("yellow");
          pieceInputList3[i].classList.remove("gray");
          wordle_array3.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


      }else if(answer[2].letter.includes(inputValue || answer[2].letter.indexOf(inputValue))){

          pieceInputList3[i].classList.add("yellow");
          pieceInputList3[i].classList.remove("green");
          pieceInputList3[i].classList.remove("gray");

      }else if(answer[2].letter.indexOf(inputValue) == -1){

          pieceInputList3[i].classList.add("gray");
          pieceInputList3[i].classList.remove("green");
          pieceInputList3[i].classList.remove("yellow");

      }else{

          pieceInputList3[i].classList.remove("green");
          pieceInputList3[i].classList.remove("yellow");
          pieceInputList3[i].classList.remove("gray");
      }

  }

  //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

  let result3 = wordle_array3.join("");
  let result_value3 = result3.match("world");

  if( result_value3 != null){

    for(let i = 0; i < pieceInputList3.length; i++){

      pieceInputList3[i].classList.remove("yellow");
      pieceInputList3[i].classList.remove("gray");
      infoText.innerHTML = "sucess";
      wordleBox[2].classList.add("sucess");
      
      setTimeout(() => {

        wordleBox[3].classList.remove("close");

      
      },500)

      console.log('동작중3');

    };

  };

  wordle_array3 = []; //array_값을 비워준다. 
  
};


var wordle_array4 = [];

const wordleComponent4 = () => {

  const pieceInputList4 = document.querySelectorAll(".piece4");

  for(let i = 0; i < pieceInputList4.length; i++){
      
      var inputValue = pieceInputList4[i].value;

      if(inputValue == answer[3].letter[i]){

          pieceInputList4[i].classList.add("green");
          pieceInputList4[i].classList.remove("yellow");
          pieceInputList4[i].classList.remove("gray");
          wordle_array4.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


      }else if(answer[3].letter.includes(inputValue || answer[3].letter.indexOf(inputValue))){

          pieceInputList4[i].classList.add("yellow");
          pieceInputList4[i].classList.remove("green");
          pieceInputList4[i].classList.remove("gray");

      }else if(answer[3].letter.indexOf(inputValue) == -1){

          pieceInputList4[i].classList.add("gray");
          pieceInputList4[i].classList.remove("green");
          pieceInputList4[i].classList.remove("yellow");

      }else{

          pieceInputList4[i].classList.remove("green");
          pieceInputList4[i].classList.remove("yellow");
          pieceInputList4[i].classList.remove("gray");
      }

  }

  //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

  let result4 = wordle_array4.join("");
  let result_value4 = result4.match("music");

  if( result_value4 != null){

    for(let i = 0; i < pieceInputList4.length; i++){

      pieceInputList4[i].classList.remove("yellow");
      pieceInputList4[i].classList.remove("gray");
      infoText.innerHTML = "sucess";
      wordleBox[3].classList.add("sucess");
      
      setTimeout(() => {

        wordleBox[4].classList.remove("close");
      
      },500)

      console.log('동작중4');

    };

  };

  wordle_array4 = []; //array_값을 비워준다. 
  
};


var wordle_array5 = [];

const wordleComponent5 = () => {

  const pieceInputList5 = document.querySelectorAll(".piece5");

  for(let i = 0; i < pieceInputList5.length; i++){
      
      var inputValue = pieceInputList5[i].value;

      if(inputValue == answer[4].letter[i]){

          pieceInputList5[i].classList.add("green");
          pieceInputList5[i].classList.remove("yellow");
          pieceInputList5[i].classList.remove("gray");
          wordle_array5.push(inputValue); //글자의 위치 혹은 글자가 일치할 때 array에 담기


      }else if(answer[4].letter.includes(inputValue || answer[4].letter.indexOf(inputValue))){

          pieceInputList5[i].classList.add("yellow");
          pieceInputList5[i].classList.remove("green");
          pieceInputList5[i].classList.remove("gray");

      }else if(answer[4].letter.indexOf(inputValue) == -1){

          pieceInputList5[i].classList.add("gray");
          pieceInputList5[i].classList.remove("green");
          pieceInputList5[i].classList.remove("yellow");

      }else{

          pieceInputList5[i].classList.remove("green");
          pieceInputList5[i].classList.remove("yellow");
          pieceInputList5[i].classList.remove("gray");
      }

  }

  //만약 value 값이 array값과 완전 일치한다면 -> 정답이라면 

  let result5 = wordle_array5.join("");
  let result_value5 = result5.match("plate");

  if(result_value5 != null){

    for(let i = 0; i < pieceInputList5.length; i++){

      pieceInputList5[i].classList.remove("yellow");
      pieceInputList5[i].classList.remove("gray");
      infoText.innerHTML = "sucess";
      wordleBox[4].classList.add("sucess");
      
      setTimeout(() => {

        gameOverpage.style.display = "flex";
      
      },500)

      console.log('동작중5');

    };

  };

  wordle_array5 = []; //array_값을 비워준다. 
  
};


//wordledBox 클릭시 힌트제공 함수

const infoContent = () => {

 for(let i = 0; i < wordleBox.length; i++){

    wordleBox[i].addEventListener("click" , function(){

      infoText.textContent = answer[i].info;
        
    });
 }
};

// score 카운트 함수

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

var countBox1 = "";
var countBox2 = "";
var countBox3 = "";
var countBox4 = "";
var countBox5 = "";

const counting = () => {

if(!wordleBox[0].classList.contains("sucess")){

  wordleComponent1();
  count1++;
  console.log(count1);
  countBox1 = count1;
  scoreBox[0].innerHTML = countBox1;
  

}else if(!wordleBox[1].classList.contains("sucess")){
 
  wordleComponent2();
  count2++;
  console.log(count2);
  countBox2 = count2;
  scoreBox[1].innerHTML = countBox2;

}else if(!wordleBox[2].classList.contains("sucess")){

  wordleComponent3();
  count3++;
  console.log(count3);
  countBox3 = count3;
  scoreBox[2].innerHTML = countBox3;

}else if(!wordleBox[3].classList.contains("sucess")){

  wordleComponent4();
  count4++;
  console.log(count4);
  countBox4 = count4;
  scoreBox[3].innerHTML = countBox4;

}else if(!wordleBox[4].classList.contains("sucess")){

  wordleComponent5();
  count5++;
  console.log(count5);
  countBox5 = count5;
  scoreBox[4].innerHTML = countBox5;

 }else{

};

totalScore.innerHTML = countBox1 + countBox2 + countBox3 + countBox4 + countBox5;


}

//스타트 버튼 클릭시 함수

wordleStartBtn.addEventListener("click" , function(e){
e.preventDefault();
count1 = 0; //count값을 '0'으로 재정의
count2 = 0;
count3 = 0;
count4 = 0;
count5 = 0;
wordleStartBtn.classList.add("start");
infoText.textContent = "Click Blanks";
infoContent();
wordleSubmit.addEventListener("click" ,  counting); //시작버튼을 클릭해야 subMit버튼 작동

});

const pieceInputList1 = document.querySelectorAll(".piece1");
const pieceInputList2 = document.querySelectorAll(".piece2");
const pieceInputList3 = document.querySelectorAll(".piece3");
const pieceInputList4 = document.querySelectorAll(".piece4");
const pieceInputList5 = document.querySelectorAll(".piece5");

//input value값, 배경색, 섹션 보이기 디폴트값

const valueDefault = () => {

for(let i = 0; i <  pieceInputList1.length; i++){

  pieceInputList5[i].classList.remove("green");
  pieceInputList1[i].classList.remove("green");
  pieceInputList2[i].classList.remove("green");
  pieceInputList3[i].classList.remove("green");
  pieceInputList4[i].classList.remove("green");
  pieceInputList1[i].value = "";
  pieceInputList2[i].value = "";
  pieceInputList3[i].value = "";
  pieceInputList4[i].value = "";
  pieceInputList5[i].value = "";
  wordleBox[0].classList.remove("close");
  wordleBox[i].classList.add("close");
  wordleBox[i].classList.remove("sucess");

};


}

//재시작 버튼 

restartBtn.addEventListener("click", function(){

gameOverpage.style.display = "none";
infoText.innerHTML = "";
wordleStartBtn.classList.remove("start");
valueDefault();
wordleSubmit.removeEventListener("click" , counting);

});

