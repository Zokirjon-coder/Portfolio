let innerText = document.getElementById("loadText");
let text = new Blotter.Text("Loading", {
    family: "Monument",
    size: 120,
    fill: "white",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 80,
    paddingBottom: 80
});

let material = new Blotter.LiquidDistortMaterial();

    material.uniforms.uVolatility.value = 0.3;
    material.uniforms.uSpeed.value = 0.7;
    material.uniforms.uSeed.value = 5;

// these all properties can be set on blotter.js material page 

let blotter = new Blotter(material, {
    texts: text
});
let scope = blotter.forText(text);
scope.appendTo(innerText);

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        document.querySelector('.loader').style.display = 'none';

        gsap.from('#antext', {y: '75vh', duration: 1.5});
        gsap.to('#antext', {y: '75vh', duration: 1.2, delay: 2});
        gsap.to('.animS2', {y: '100%', duration: .5, delay: 2.5});
        gsap.to('.animS1', {y: '100%', duration: .5, delay: 2.7});
    
        gsap.from('.navigation li',{opacity: 0, y: 25, duration: .7, delay: 3.3, stagger: .2});
        gsap.from('.logo',{opacity: 0, scale: 0, duration: 1, delay: 3.5});
        gsap.from('.heading1 h1',{opacity: 0, delay: 3.5});
        gsap.from('.heading1 h1',{duration: .7, skewY: 25, delay: 3.5});
    }, 5000);
    
    let mouseCursor = document.querySelector('.cursor');
        // let links = document.querySelectorAll('a');;

        window.addEventListener('mousemove', cursor);

        function cursor(e) {
            gsap.to(mouseCursor, 0.4, {
                x: e.clientX,
                y: e.clientY
            });
        }

        // links.forEach(link => {
        //     link.addEventListener("mouseleave", () => {
        //         mouseCursor.classList.remove("link-grow");
        //         gsap.to(mouseCursor, 0.4, {
        //             scale: 1
        //         });
        //     });

        //     link.addEventListener("mouseover", () => {
        //         mouseCursor.classList.add("link-grow");
        //         gsap.to(mouseCursor, 0.4, {
        //             scale: 2
        //         });
        //     });
        // });
    

    

    
let hoverImg = new hoverEffect({
    parent: document.querySelector('#img'),
    intensity: 0.5,
    image1: './assets/images/user.png',
    image2: './assets/images/user1.png',
    displacementImage: './assets/images/3.jpg'
});

let word = document.querySelector('.words');

const word1 = `Meni ismim Zokirjon.`;
const word2 = `Men web dasturlash sohasida FrontEnd bo'yicha dasturchiman.`;
const word3 = `Bu men haqimda qisqacha ma'lumot beruvchi portfolio.`;
const word4 = `Marhamt uni ko'rib chiqing!`;

const words = [word1, word2, word3, word4];

let i = 0;
let j = 0;

setTimeout(()=>{
    setInterval(()=>{
        if(j>=words.length) j = 0;
        writer(word, words[j])
    }, 150)
}, 5800)

function writer(obj, word){
    if(obj.innerHTML.length < word.length){
        obj.innerHTML += word[i];
        i++;
    }else{
        obj.innerHTML = '';
        j++;
        i=0; 
    }
}
});
const toggler_btn = document.querySelector('.toggler_btn');
const menu = document.querySelector('.menu');
toggler_btn.addEventListener('click', ()=>{
    toggler_btn.classList.toggle('backward');
    menu.classList.toggle('forward');
})