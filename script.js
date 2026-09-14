function toggleMenu() {
const nav = document.querySelector(".nav");

nav.classList.toggle("active");
}


function sendForm(event) {

event.preventDefault();

alert("Děkujeme za poptávku! Ozveme se vám co nejdříve.");

}


// ================= GALERIE =================

const galleries = [

{
title: "Rekonstrukce školy - Uničov",
category: "Rekonstrukce",

images: [
"skola1.jpeg",
"skola2.jpeg",
"skola3.jpeg",
"skola4.jpeg",
"skola5.jpeg",
"skola6.jpeg",
"skola7.jpeg",
"skola8.jpeg",
"skola9.jpeg",
"skola11.jpeg",
"skola12.jpeg",
"skola13.jpeg",
"skola14.jpeg"
]
},


{
title: "Přestavba balkónu na koupelnu",
category: "Přestavba",

images: [
"prestavba2.jpeg",
"prestavba3.jpeg",
"prestavba4.jpeg"
]
},


{
title: "Rekonstrukce 3 bytových jednotek",
category: "Rekonstrukce",

images: [
"rek4.jpeg",
"rek5.jpeg",
"rek10.jpeg"
]
}

];


let currentGallery = 0;
let currentPhoto = 0;


function openGallery(galleryIndex) {

currentGallery = galleryIndex;
currentPhoto = 0;

updateGallery();

document
.getElementById("galleryModal")
.classList.add("active");

document.body.style.overflow = "hidden";
}


function closeGallery() {

document
.getElementById("galleryModal")
.classList.remove("active");

document.body.style.overflow = "";
}


function changePhoto(direction) {

const gallery = galleries[currentGallery];

currentPhoto += direction;

if (currentPhoto < 0) {
currentPhoto = gallery.images.length - 1;
}

if (currentPhoto >= gallery.images.length) {
currentPhoto = 0;
}

updateGallery();
}


function updateGallery() {

const gallery = galleries[currentGallery];

document.getElementById("galleryImage").src =
gallery.images[currentPhoto];

document.getElementById("galleryTitle").textContent =
gallery.title;

document.getElementById("galleryCategory").textContent =
gallery.category;

document.getElementById("galleryCounter").textContent =
`${currentPhoto + 1} / ${gallery.images.length}`;
}


// Kliknutí mimo obrázek zavře galerii

document.getElementById("galleryModal").addEventListener("click", function(event) {

if (event.target === this) {
closeGallery();
}

});


// Klávesnice

document.addEventListener("keydown", function(event) {

const modal = document.getElementById("galleryModal");

if (!modal.classList.contains("active")) {
return;
}

if (event.key === "Escape") {
closeGallery();
}

if (event.key === "ArrowLeft") {
changePhoto(-1);
}

if (event.key === "ArrowRight") {
changePhoto(1);
}

});



const rentalData = {
drticka: {
number: "01",
title: "Drtička",
image: "drticka.jpg",
text: `
<p><strong>Mobilní drtič stavební suti RESTA 350×110</strong> je kompaktní a výkonný stroj pro drcení cihel, betonu, dlažby a kamene přímo na stavbě. Zpracovává materiál do velikosti 10 cm a vytváří výstupní frakci do 50 mm, kterou lze dále využít ve stavebnictví.
.</p>

<h3>Technické údaje</h3>

<p>Hmotnost: 350kg</p>
<p>Pohon: elektromotor 3kW/400V, Výkon: 0,5 - 1,5 t/h</p>
<p>Vstup: max 300x100mm, Výstup: 0-50mm </p>


<h3>Cena půjčení</h3>

<p>1-5 dnů...950Kč/den bez DPH</p>

<p>6 a více dnů...850Kč/den bez DPH</p> 

<p>případný pronájem na delší dobu je o domluvě</p>
`
},

elektrocentrala: {
number: "02",
title: "Elektrocentrála",
image: "centrala.jpg",
text: `
<h3>Technické údaje</h3>

<p>Hmotnost: 80kg (s kolečky)</p>
<p>Palivo: Natural 95, Nádrž: 25l</p>
<p>Napájení: 230/400V (třífázová), Výkon: 5-7kVA </p>
<p>Počet zásuvek: 1 x 400V / 2 x 230V


<h3>Cena půjčení</h3>

<p>1 – 10 dnů...500Kč /den bez DPH</p>
<p>11 dnů a více...400Kč/den bez DPH </p>
`
},

vibracni: {
number: "03",
title: "Vibrační deska",
image: "vibrdeskk.png",
text: `
<h3>Technické údaje</h3>

<p>Hmotnost: 95-100kg, Pracovní šířka: 500mm</p>
<p>Odstředivá síla: 15kN, Frekvence vibrací: cca 98Hz</p>
<p>Motor: Honda GX160 (benzín), Výkon motoru: 3,5-4kW</p>
<p>Pojezd: vpřed (jednosměrná)</p>
<p>Kropení: nádrž na vodu 8l/regulace průtoku/rozvod vody po celé desce - nelepí asfalt, méně prachu při dlažbě, lepší kvalita hutnění

<h3>Cena půjčení</h3>

<p>Půl den (max 4hodiny) - 600Kč bez DPH</p>
<p>Celý den: 900Kč/den bez DPH</p>
<p>Víkend: (pá-ne) 1500Kč bez DPH</p>
`
},

vytah: {
number: "04",
title: "Stavební výtah",
image: "vytahhh.png",
text: `
<h3>Technické údaje</h3>

<p>Nosnost: max. 200kg</p>
<p>Délka výtahu: 13m</p>

<h3>Cena půjčení</h3>

<p>850Kč/ den bez DPH</p>
`
}

};


function openRentalDetail(type) {

const item = rentalData[type];

document.getElementById("rentalModalNumber").textContent = item.number;
document.getElementById("rentalModalTitle").textContent = item.title;

document.getElementById("rentalModalImage").src = item.image;
document.getElementById("rentalModalImage").alt = item.title;

document.getElementById("rentalModalText").innerHTML = item.text;

document.getElementById("rentalModal").classList.add("active");

document.body.style.overflow = "hidden";
}


function closeRentalDetail() {

document.getElementById("rentalModal").classList.remove("active");

document.body.style.overflow = "";
}


/* kliknutí mimo okno */

document.getElementById("rentalModal").addEventListener("click", function(e) {

if (e.target === this) {
closeRentalDetail();
}

});


/* ESC */

document.addEventListener("keydown", function(e) {

if (e.key === "Escape") {
closeRentalDetail();
}

});


