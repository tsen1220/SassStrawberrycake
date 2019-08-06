var test=anime.timeline({
    targets:'.flame',
    easing:'easeOutExpo',
    duration:1000,
    opacity:0,
    autoplay:false,
});

test.add({
    targets:".ggg",
    opacity:0,
    duration:2000,
    top:'50px',
})


test.add({
    targets:"#test",
    opacity:1,
    duration:2000,
    top:'100px',
})

test.add({
    targets:".bal",
    opacity:{
        value:'1',
    duration:500},
    duration:10000,
    delay:500,
    translateY:'-500px',
    translateX:function(){
        return anime.random(-40,40)
    },
    rotate:function(){
        return anime.random(-60,60)
    }

    }
)

test.add({
    targets:".bal",
    opacity:0,
    duration:3000,
    delay:500,
  
})


document.querySelector(".flame").addEventListener('click',()=>{test.play()})