const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

function firstPageAnimation(){
    var tl =gsap.timeline();

    tl.from("#nav" , {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.easInOut"
    })

     .to(".boundingelem" , {
        y: 0,
        duration: 2,
        ease: "expo.easInOut",
        stagger: .2,
        delay: -1
    })
    .from("#homefooter", {
        y: -10,
        duration: 1.5,
        ease: "expo.easeInOut",
        opacity: 0,
        delay: -1
    })

}



function circleMouse(){
    window.addEventListener("mousemove" , function(event){
    // console.log({x: event.clientX, y: event.clientY});
    document.querySelector("#minCircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
})
}
circleMouse();
firstPageAnimation();