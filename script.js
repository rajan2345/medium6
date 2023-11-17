const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl= gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration: 2,
        ease: Expo.easeInOut
    })
}
function circleMouseFollower(xscale=1, yscale=1) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleMouseFollower();
firstPageAnim();