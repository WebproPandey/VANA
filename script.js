
function locomaotivescroll(){



    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    }
        
    locomaotivescroll();

function loader()
{
 var tl = gsap.timeline()
 
 
tl.from("#img7",
 {
   scale:0,

 })
  .from("#img4",
    {
      scale:0,
    })
    .from("#img3",
    {
      scale:0,
    })
    .from("#img1",
    {
      scale:0,
    })
    .from("#img2",
    {
      scale:0,
    })
    .to(".heading",
    {
      y:-50,
      opacity:1,
      duration:1.2,
    })
    .from("#img5",
    {
      scale:0,
    })
    
    .from("#img6",
    {
      scale:0,
      
    })
    .to(".navbar , .lasttext",
    {
       opacity:1,
       y:-2,
    })
}
loader()

function slide()
{
gsap.to("#button",
{
  y:-100,
  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    start:'top 0%',
    scrub:3,
  }
})

gsap.to("#img1",
{
  x:'-200%',
  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})
gsap.to("#img6",
{
   x:'200%',
   y:'200%',

  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})
   
gsap.to("#img3",
{
  x:'-200%',
  y:'-200%',

  scrollTrigger:
  { 
    trigger:'.img_hold',
  scroller:'body',
  start:'top 0%',
  end:'top -10%',
    scrub:3,
  }
})
   
gsap.to("#img4",
{
  y:'200%',

  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})


gsap.to("#img5",
{
  y:'-200%',
  x:'200%',

  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})
   

gsap.to("#img7",
{
  x: '300%',
  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})
   

gsap.to("#img2",
{
  y:'-200%',
  scrollTrigger:
  {
    trigger:'.img_hold',
    scroller:'body',
    start:'top 0%',
    end:'top -10%',
    scrub:3,
  }
})

}
slide()

function menubar()
{
gsap.to("#image .img_hold",
{

scrollTrigger:
{
trigger:'#image',
scroller:'body',
pin:true,
}
})


var menushow = document.querySelector("#menushow") 
var menu = document.querySelector("#menu")
var close =document.querySelector("#close")
var tl = gsap.timeline({paused:true});
tl.to(menushow,
  {
    y:'0%',
  })



menu.addEventListener("click",function()
{  
   tl.play();
})
close.addEventListener("click",function()
{
  tl.reverse();
})
}
menubar()

function texthover()
{
var text1 = document.querySelector("#text1")
var text2 = document.querySelector("#text2")
var text3 = document.querySelector("#text3")
var text4 = document.querySelector("#text4")

text1.addEventListener("mouseenter",function()
{
  text1.style.color = 'white'
  text2.style.color = 'grey'
  text3.style.color = 'grey'
  text4.style.color = 'grey'
})
text2.addEventListener("mouseenter",function()
{
  text2.style.color = 'white'
  text1.style.color = 'grey'
  text3.style.color = 'grey'
  text4.style.color = 'grey'
})
text3.addEventListener("mouseenter",function()
{
  text3.style.color = 'white'
  text1.style.color = 'grey'
  text2.style.color = 'grey'
  text4.style.color = 'grey'
})
  
text4.addEventListener("mouseenter",function()
{
  text4.style.color = 'white'
  text1.style.color = 'grey'
  text2.style.color = 'grey'
  text3.style.color = 'grey'
})

}
texthover()

gsap.to(".borderline",
{
  y:-200,
  scrollTrigger:
  {
  scroller:'body',
  trigger:'.borderline',
  start:'top 80%',
  end:'top 50%',
  scrub:3,
  }
})
gsap.to("#textfotter",
{
  y:10,
  opacity:0,
  scrollTrigger:
  {
    scroller:'body',
    trigger:'.borderline',
    start:'top 100%',
    end:'top 90%',
    scrub:3,
    // markers:true,    
  }

})
var tl3 = gsap.timeline()
tl3.to('.midline',
{
    height:'100%',
    scrollTrigger:
    {
      trigger:'#rightline',
      scroller:'body',
      start:'top 80%',
      end:'top 80%',
      scrub:4,

    }
})
.to(".fotterline",
{
  width:'100%',
  ease: "Power5.easeInOut",
  scrollTrigger:
  {
     duration:3,
     trigger:'#fotter',
     scroller:'body',
     start:"top 85%",
     end:"top 85%",
     scrub:2,
    }
})
.to(".fottermidline",
{
  height:'100%',
  ease: "Power5.easeInOut",
  scrollTrigger:
  {
     duration:3,
     trigger:'#fotter',
     scroller:'body',
     start:"top 85%",
     end:"top 85%",
     scrub:2,
    }
})
.to(".bottomline",
{
  width:'100%',
  ease: "Power5.easeInOut",
  scrollTrigger:
  {
     duration:3,
     trigger:'#fotter',
     scroller:'body',
     start:"100% 85%",
     end:"100% 85%",
     scrub:2,
    }
})
gsap.to("#eighty",
{
  scale:13,
  rotate:'90deg',
  x:330,
  y:1900,
  fontSize:'60vw',
  scrollTrigger:
  {
    
    trigger:"#eightytext",
    scroller:'body',
    start:'top  10%',
    end:'top -50%',
    pin:true,
    scrub:5,
  }
})
gsap.to("#page2text",
{
  opacity:0,
  scrollTrigger:
  {
    trigger:'#eightytext',
    scroller:'body',
    start:'top -40%',
    end:'top -70%',
    scrub:4,
    
  }
})

var page3firstimg = document.querySelectorAll(".page3firstimg")
page3firstimg.forEach(function(val,ind)
{
  var tl4 =gsap.timeline();



tl4
.to("#page3text",
{
  y:1100,
  scrollTrigger:
  {
    trigger:val,
    scroller:'body',
    start:'50% 50%',
    end:'50% 30%',
    scrub:4,
    pin:true,

  }
})

.to("#page3text2",
{
    y:1200,
  scrollTrigger:
  {
    duration:5,
    trigger:val,
    scroller:'body',
    start:'50% 50%',
    end:'50% 30%',
    scrub:4,

  }
})

.to("#page3text3",
{
  y:1050,
  scrollTrigger:
  {
    duration:5,
    trigger:val,
    scroller:'body',
    start:'top 95%',
    end:'top  -10%',
    scrub:4,

  }
})
})
 gsap.to("#page4firstline",
 {
  height:'100%',
  scrollTrigger:
  {
    trigger:'.page4',
    scroller:'body',
    start:'top 90%',
    end:'top 75%',
  }
 }) 
 gsap.to("#page4leftmidline , #page4rightmidline",
 {
  width:'50%',
  scrollTrigger:
  {
    trigger:'.page4 .mid',
    scroller:'body',
    start:'top 95%',
    end:'top 85%',
  }
 }) 
 gsap.to("#page4bleftmidline , #page4brightmidline",
 {
  width:'50%',
  scrollTrigger:
  {
    trigger:'.page4 .mid',
    scroller:'body',
    start:'top 75%',
    end:'top 65%',
  }
 })
 gsap.to("#selemenpera",
 {
 y:-20,
 opacity:1,
 scrollTrigger:
 {
 trigger:'.page4 .down',
 scroller:'body',
 start:'top 20%',
 end:'top 10%',
 scrub:true,
 } 
 })
  
gsap.to("#scroll", {
  x: "100%", 
  ease: "none",
  scrollTrigger: {
    trigger: "#scroll",
    start: "top 50%",
    end: "top  0%",
    scrub: true,
  }
});

var  textscroll = document.querySelector(".textscroll")
var cursor  = document.querySelector(".cursur")

textscroll.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    opacity: 1,
    scale:1.3,
    left: e.clientX,
    top: e.clientY,
    duration: 0.2, 
        ease: 'power2.Inout' 
  });
});

textscroll.addEventListener("mouseleave", function (e) {
  gsap.to(cursor, {
    opacity: 0,
    scale:.1,
    duration: 0.2,
    ease: 'power2.Inout'
  });
});

gsap.to(".bigimg2",
{
  height:'80vh',
  scrollTrigger:
  {
    trigger:'.page5',
    scroller:'body',
    start:'top 0%',
    end:'top -30%',
    scrub:5,
    // pin:true,
    // markers:true

  }
})

function scrollpage6()
{

  var tl =gsap.timeline()
  ScrollTrigger.create(
    {
      animation:tl,
      duration:5,
     trigger:'.page6',
     scroller:'body',
     start:'top 50%', 
     end:'top -10%',
     satgger:true,
     scrub:4,
    //  markers:true
    
  })

  tl.to('#boxscroll1',
  {
    x:'100%',
  
  })
  .to("#boxscroll2",{
     x:'100%',
  })
  .to("#boxscroll3",{
    x:'100%',
  })
  .to("#boxscroll4",{
   x:'100%', 
  })
  .to("#boxscroll5",{
   x:'100%',
  })

  gsap.to("#page6firstimg",
  {
  y:-200,
  scrollTrigger:
  {
    trigger:".page6firstbox",
    scroller:'body',
    start:'top 50%',
    end:'top 30%',
    scrub:5,
    // markers:true
    
  }
  
  })
}

scrollpage6()

function scrollpage7()
{

  var tl =gsap.timeline()
  ScrollTrigger.create(
    {
      animation:tl,
      duration:5,
     trigger:'.page7',
     scroller:'body',
     start:'top 80%', 
     end:'top -10%',
     satgger:true,
     scrub:4,
    //  markers:true
    
  })

  tl.to('#boxscroll6',
  {
    x:'100%',
  
  })
  .to("#boxscroll7",{
     x:'100%',
  })
  .to("#boxscroll8",{
    x:'100%',
  })
  .to("#boxscroll9",{
   x:'100%', 
  })
  .to("#boxscroll10",{
   x:'100%',
  })

  gsap.to("#page7firstimg",
  {
  y:-100,
  scrollTrigger:
  {
    trigger:".page7firstbox",
    scroller:'body',
    start:'top 80%',
    end:'top 0%',
    scrub:5,
    // markers:true
    
  }
  
  })
  gsap.to("#page7secimg",
  {
  y:-150,
  height:'60vh',
  scrollTrigger:
  {
    trigger:".page7firstbox",
    scroller:'body',
    start:'50% 0%',
    end:'50% -10%',
    scrub:5,
    // markers:true
    
  }
  
  })
}
scrollpage7()




 function page8()
 {


gsap.to('.page8line',
{
  width:'100%',
  scrollTrigger:
  {
   trigger:'.page8',
   scroller:'body',
   start:'top 90%',
   end:"top 75%",

   scrub:4,
  //  markers:true, 
  }
})
gsap.to('.page8midline',
{
  height:'100%',
  scrollTrigger:
  {
    trigger:'.page8',
    scroller:'body',
    start:'top 85%',
    end:'top 80%',
    scrub:4,
    // markers:true
  }
})

gsap.to('.leftimg',
{
  y:-200,
  scrollTrigger:
  {
    trigger:'.leftimg',
    scroller:'body',
    start:'top 50%',
    end:'top 30%',
    scrub:5,
    // markers:true
  }
})

gsap.to('.midimg',
{
  y:-250,
  scrollTrigger:
  {
    trigger:'.midimg',
    scroller:'body',
    start:'top 100%',
    end:'top 40%',
    scrub:5,
    // markers:true
  }
})

gsap.to('.rightimg',
{
  y:-200,
  scrollTrigger:
  {
    trigger:'.rightimg',
    scroller:'body',
    start:'top 80% ',
    end:'top 0%',
    scrub:5,
    // markers:true
  }
})

}
page8()

function page9()
{
var tl = gsap.timeline()

tl.to('.fistlineimg',
{
  y:'-5vw',
  scrollTrigger:
{
  trigger:'.fistlineimg',
  scroller:'body',
  start:'top 50%',
  end:'top -5%',
  scrub:4,
}

 
})

.to('.seclineimg',
{
  y:'-15vw',
  scrollTrigger:
{
  trigger:'.seclineimg',
  scroller:'body',
  start:'top 50%',
  end:'top -5%',
  scrub:4,
}


 
})

.to('.thirdlineimg',
{
  y:'-25vw',
  scrollTrigger:
{
  trigger:'.thirdlineimg',
  scroller:'body',
  start:'top 50%',
  end:'top 20%',
  scrub:4,
}

 
})

.to('.fourlineimg',
{
  y:'-7vw',
  scrollTrigger:
{
  trigger:'.fourlineimg',
  scroller:'body',
  start:'top 50%',
  end:'top -20%',
  scrub:4,
}

 
})

}
page9()

function page10()
{
   gsap.to('#page10img',
   {
     y:'-40%',
     height:'80vh',
     scrollTrigger:
     {
      trigger:'#page10img',
      scroller:'body',
      start:'top 50%',
      end:'top 10%',
      scrub:5,
     }
   })

  gsap.to('.page10 .midline',
    {
      height:'100%',
      scrollTrigger:
      {
       trigger:'.lastfotter',
       scroller:'body',
       start:'top 50%',
       end:'top 40%',
      }
    })
  var selemen = document.querySelector('.fotterheading')
  var splittext = selemen.textContent.split("");
    clutter =""
    splittext.forEach(function(val,ind)
    {
    clutter += `<span  class="selemen inline-block" >${val}</span>`

    })
  
    selemen.innerHTML = clutter
    var tl = gsap.timeline({
      scrollTrigger: {
        duration:2,
        trigger: '.lastfotter',
        scroller:'body',
        start: 'top 25%',
        end: 'top 25%',
      }
    });

    tl.to('.selemen', {
      y: '50%',
      stagger:0.1,
    }) 
      
    .to('.Rlogo',
      {
      top:'10%'

      })


}
page10();



