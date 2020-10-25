const positive = document.getElementById("positive");
const recovery = document.getElementById("recovery");
const pcr = document.getElementById("pcr");
const death = document.getElementById("death");
const mt = "";
const mnt_msg = "現在メンテナンス中です";

const api = "https://covid19-japan-web-api.now.sh/api/v1/prefectures";
const api_all = "https://covid19-japan-web-api.now.sh/api/v1/total";
const xhr  = new XMLHttpRequest();
xhr.open("GET", api);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    prefecture(xhr.response);
}

const xhr2  = new XMLHttpRequest();
xhr2.open("GET", api_all);
xhr2.responseType = "json";
xhr2.send();
xhr2.onload = function () {
  now(xhr2.response);
}

var bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loader');
bg.classList.remove("is-hide");
loader.classList.remove("is-hide");
if (mt === "") {
  window.addEventListener('load', stopload);
  setTimeout('stopload()',10000);
}else if(mt === "mnt") {
  document.getElementById("load_text").innerText = mnt_msg;
}
function stopload(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}


function now(res){
  death.innerText = res.death;
  pcr.innerText = res.pcr;
  positive.innerText = res.positive;
  recovery.innerText = res.discharge;
}
