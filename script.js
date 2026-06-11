const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {


gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
        intro.style.display = "none";
    }
});

const tl = gsap.timeline();

// Lírios aparecem
tl.to(".lily-left", {
    opacity: 1,
    duration: 0.5
})

.to(".lily-center", {
    opacity: 1,
    duration: 0.5
}, "-=0.2")

.to(".lily-right", {
    opacity: 1,
    duration: 0.5
}, "-=0.2")

// LÍRIO ESQUERDO
.to(".lily-left .p2", {
    rotation: -55,
    duration: 1.8,
    transformOrigin: "bottom center",
    ease: "power3.out"
})

.to(".lily-left .p3", {
    rotation: 55,
    duration: 1.8,
    transformOrigin: "bottom center",
    ease: "power3.out"
}, "<")

.to(".lily-left .p1", {
    y: -20,
    scaleY: 1.15,
    duration: 1.5,
    ease: "power2.out"
}, "<")

// LÍRIO DIREITO
.to(".lily-right .p2", {
    rotation: -55,
    duration: 1.8,
    transformOrigin: "bottom center",
    ease: "power3.out"
}, "+=0.5")

.to(".lily-right .p3", {
    rotation: 55,
    duration: 1.8,
    transformOrigin: "bottom center",
    ease: "power3.out"
}, "<")

.to(".lily-right .p1", {
    y: -20,
    scaleY: 1.15,
    duration: 1.5,
    ease: "power2.out"
}, "<")

// LÍRIO CENTRAL
.to(".lily-center .p2", {
    rotation: -65,
    duration: 2,
    transformOrigin: "bottom center",
    ease: "power4.out"
}, "+=0.5")

.to(".lily-center .p3", {
    rotation: 65,
    duration: 2,
    transformOrigin: "bottom center",
    ease: "power4.out"
}, "<")

.to(".lily-center .p1", {
    y: -30,
    scaleY: 1.25,
    duration: 2,
    ease: "power3.out"
}, "<")

// brilho suave
.to(".petal", {
    filter:
    "drop-shadow(0 0 15px #ff8fc7) drop-shadow(0 0 30px #ff8fc7) drop-shadow(0 0 60px #ff8fc7)",
    duration: 2
})

// frase
.to("#message", {
    opacity: 1,
    y: -25,
    duration: 2.5,
    ease: "power2.out"
});

// movimento contínuo
gsap.to(".flowers", {
    y: -8,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// brilho pulsando
gsap.to(".petal", {
    filter:
    "drop-shadow(0 0 20px #ff8fc7) drop-shadow(0 0 40px #ff8fc7) drop-shadow(0 0 80px #ff8fc7)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


});
