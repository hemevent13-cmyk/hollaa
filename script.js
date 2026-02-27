const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");   // ✅ added
const message = document.getElementById("message"); // ✅ added

const page1 = document.getElementById("page1");
const choicePage = document.getElementById("choicePage");
const typingText = document.getElementById("typingText");
const choiceButtons = document.getElementById("choiceButtons");

const finalPage = document.getElementById("finalPage");
const envelope = document.getElementById("envelope");
const fullLetter = document.getElementById("fullLetter");
const bigLetterText = document.getElementById("bigLetterText");

const heartsContainer = document.querySelector(".hearts");
const letterHeartsContainer = document.getElementById("letterHearts");

/* =========================
   NO BUTTON LOGIC ✅
========================= */

const noMessages = [
  "ghir ghletyy yaak 🥲",
  "nermiiiine 🥺",
  "wlaa lokhra machi had lbotona 😏",
  "khtyyyyy machi hna glt liiik",
  "assafii b9a fya lhaal daba  😭",
  "mazala katberkii 😂 ",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
  "yalh batii katberki 3liha 😂",
 "yalh batii katberki 3liha 😂",
];

let noIndex = 0;

noBtn.onclick = () => {
  message.innerHTML = noMessages[noIndex];
  noIndex = (noIndex + 1) % noMessages.length;
};


/* =========================
   YES BUTTON
========================= */

yesBtn.onclick = () => {
  page1.classList.add("hidden");
  choicePage.classList.remove("hidden");

  typeLines([
    "waaylii 3la katbghini azin 😂❤️",
    "yalh ila katbghini chkon ahsan le3ab dkora ?"
  ], () => {
    choiceButtons.classList.remove("hidden");
  });
};


/* =========================
   CHOICES
========================= */

document.querySelectorAll(".choiceBtn").forEach(btn=>{
  btn.onclick = () => {

    const type = btn.dataset.type;
    choiceButtons.classList.add("hidden");

    if(type === "ronaldo"){
      typeLines(
        ["hhhhh la la 😂","ma3ndoch kas l3alam","gha 3awdi chofi azin inuu hhh"],
        ()=>choiceButtons.classList.remove("hidden")
      );
    }

    if(type === "issam"){
      typeLines(
        ["Issam? ","ana maknl3ebch mzyan hta fplay hhhhh","nermine lah yhdik jawbi nichan hhh"],
        ()=>choiceButtons.classList.remove("hidden")
      );
    }

    if(type === "messi"){
      openFinal();
    }
  };
});


/* =========================
   TYPING FUNCTION
========================= */

function typeLines(lines, callback){
  typingText.innerHTML="";
  let l=0,c=0;

  function type(){
    if(l < lines.length){
      if(c < lines[l].length){
        typingText.innerHTML+=lines[l][c++];
        setTimeout(type,40);
      }else{
        typingText.innerHTML+="<br><br>";
        l++; c=0;
        setTimeout(type,600);
      }
    }else if(callback) callback();
  }
  type();
}


/* =========================
   FINAL
========================= */

function openFinal(){
  choicePage.classList.add("hidden");
  finalPage.classList.remove("hidden");

  setTimeout(()=> envelope.classList.add("open"),800);

  setTimeout(()=>{
    fullLetter.classList.remove("hidden");
    fullLetter.classList.add("show");
    startLetter();
    setInterval(createLetterHeart,600);
  },4000);
}

function startLetter(){
  const lines=[
    "kidayra labas 3lik anirmine dyalii 😂",
    "iwa achngoliik dabaa al3meer 🤷‍♂️",
    "kanmooooot 3lik 😂😂😂😂❤️❤️",
    "ombrrrouk lvalidation dyl semestre 😂",
    "afer7tini m3ak fach gltilhalii 💕🥰 ",     
    "ohegaa 3ndk chinhaar tnsay rah kanbghiik ",
    "bzaaaaaaaaaaaaaaaaaaaaaaaf ❤️"
  ];

  let l=0,c=0;
  bigLetterText.innerHTML="";

  function type(){
    if(l < lines.length){
      if(c < lines[l].length){
        bigLetterText.innerHTML+=lines[l][c++];
        setTimeout(type,40);
      }else{
        bigLetterText.innerHTML+="<br><br>";
        l++; c=0;
        setTimeout(type,800);
      }
    }
  }
  type();
}


/* =========================
   GLOBAL HEARTS
========================= */

function createHeart(){
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(15+Math.random()*20)+"px";
  heart.style.animationDuration=(4+Math.random()*4)+"s";
  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,500);


/* =========================
   LETTER HEARTS
========================= */

function createLetterHeart(){
  const heart=document.createElement("div");
  heart.className="letterHeart";
  heart.innerHTML="💖";
  heart.style.left=Math.random()*90+"%";
  heart.style.fontSize=(15+Math.random()*20)+"px";
  heart.style.animationDuration=(2+Math.random()*2)+"s";
  letterHeartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),38000);
}