
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

    document.querySelectorAll(".links a").forEach(link => {
        link.addEventListener("click", e => {
     
          project.scrollIntoView({ behavior: "smooth" });
               e.preventDefault(); 
         
        });
      });
      
   
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
                stagger:.2

    

            }

        ).from(".links",
            {
                y:-10,
                opacity:0,
                duration:1.5,
                delay:.1,
                ease:Expo.easeInOut,
            }
        )
    }
    
    firstpageanim()

