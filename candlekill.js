var test=anime.timeline({
    targets:'.flame',
    easing:'easeOutExpo',
    duration:1000,
    opacity:0,
    autoplay:false,
});

test.add({
    targets:"#test",
    opacity:1,
    duration:3000,
    delay:500,
    top:'100px',
})

document.querySelector(".flame").addEventListener('click',()=>{test.play()})