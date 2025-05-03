
let timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),   
    smooth: true
});
function circlechaptakaro()
{
    clearTimeout(timeout);
    let xscale=1;
    let yscale=1;

    let xprev=0;
    let yprev=0;
     window.addEventListener("mousemove",(e)=>
     {
        let diffX=e.clientX-xprev;
        let diffY=e.clientY-yprev;
        xscale=gsap.utils.clamp(0.6,1.4,diffX);
        yscale=gsap.utils.clamp(0.6,1.4,diffY);
        xprev=e.clientX;
        yprev=e.clientY;
        mousemove(xscale,yscale);
        timeout=setTimeout(()=>
        {
            document.querySelector(".circle").style.transform=`translate(${e.clientX}px,${e.clientY}px) scale(1,1)`;   

        },100)



     })
        
}


circlechaptakaro();


document.querySelectorAll(".elem").forEach((elem)=>
    {
        
       let rotation=0;
       elem.addEventListener("mouseleave",(e)=>
        {
         gsap.to(elem.querySelector("img"),
     {
        opacity:0,
        display:"none",
        duration:0.5,
     })
    
        }
     );
       elem.addEventListener("mousemove",(e)=>
       {
        let diff=e.clientY-elem.getBoundingClientRect().top;
      console.log(diff);
      diffrot=e.clientX-rotation;
      rotation=e.clientX;

    

        gsap.to(elem.querySelector("img"),
    {
       opacity:0.8,
       display:"block",
        ease:Power1,
        top:diff,
        left:e.clientX,
        rotate:  gsap.utils.clamp(-20,20,diffrot)
   
        

    })
  
       }
    );
      
    });
    

function mousemove(xscale,yscale)
{
    window.addEventListener("mousemove",(e)=>
    {
       document.querySelector(".circle").style.transform=`translate(${e.clientX}px,${e.clientY}px) scale(${xscale},${yscale})`;       
    })
}

// mousemove();

   
      
   
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
                duration:1,
                delay:0,
                ease:Expo.easeInOut,
            }
        )
    }
    
    firstpageanim()

