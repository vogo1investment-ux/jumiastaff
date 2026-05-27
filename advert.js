const advertVideos=[

"promo1.mp4",

"promo2.mp4"

];

let advertIndex=0;

function showAdvert(){

const old=

document.getElementById(

"advertPopup"

);

if(old){

old.remove();

}

const box=

document.createElement(

"div"

);

box.id=

"advertPopup";

box.innerHTML=`

<div class="advertBox">

<button
id="closeAdvert">

✖

</button>

<video
autoplay
controls
muted>

<source
src="${advertVideos[advertIndex]}"
type="video/mp4">

</video>

</div>

`;

document.body.appendChild(

box

);

setTimeout(

()=>{

document.getElementById(

"closeAdvert"

).style.display=

"block";

},

3000

);

document.getElementById(

"closeAdvert"

).onclick=

()=>{

box.remove();

};

advertIndex++;

if(

advertIndex>=

advertVideos.length

){

advertIndex=0;

}

}

setTimeout(

showAdvert,

3000

);

setInterval(

showAdvert,

10000

);