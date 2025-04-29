
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),   
    smooth: true
});

function mousemove()
{
    window.addEventListener("mousemove",(e)=>
    {
       document.querySelector(".circle").style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
        
    })
}

mousemove();
document.querySelector(".links a").addEventListener("click",()=>
    {  
    project.scrollIntoView({behavior:"smooth" })
    
    })
   
    function firstpageanim()
    {
        var tl=gsap.timeline();
        tl.from('#nav',{
            y:'-10',
            opacity:0,
            duration:2,
            ease:Expo.easeInOut
        }).to(".boundingelem",
            {
                y:"0",
                ease:Expo.easeInOut,
                duration:2,
                delay:-1,
                
    

            }
        )
    }
    // function firstPageAnim() {
    //     var tl = gsap.timeline();
      
    //     tl.from("#nav", {
    //       y: "-10",
    //       opacity: 0,
    //       duration: 1.5,
    //       ease: Expo.easeInOut,
    //     })
    //       .to(".boundingelem", {
    //         y: 0,
    //         ease: Expo.easeInOut,
    //         duration: 2,
    //         delay: -1,
    //         stagger: 0.2,
    //       })
    //       .from("#herofooter", {
    //         y: -10,
    //         opacity: 0,
    //         duration: 1.5,
    //         delay: -1,
    //         ease: Expo.easeInOut,
    //       });
    //   }
    firstpageanim()

