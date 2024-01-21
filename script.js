
document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading with a delay
    setTimeout(function () {
         gsap.to(".loader",
         {
            top:'-100%',
            durastion:1.3,
            ease:Expo.InOut
         })

    }, 8000);

    // Update the percentage display during the loading process
    let percentage = 0;
    const percentageElement = document.getElementById("percentage");

    function updatePercentage() {
        if (percentage <= 100) {
            percentageElement.innerText = `${percentage}%`;
            percentage += 1;
            setTimeout(updatePercentage, 20); // You can adjust the time interval
        }
    }

    updatePercentage();
});

var heading = document.querySelectorAll(".heading")
heading.forEach(function(val)
{


gsap.to(val,
{
opacity:1,
 scrollTrigger:
 {
    durastion:1,
    delay:1.1,
    scroller:'body',
    trigger:val,
    start:'top 60%',
    end:'top 30%',
    scrub:3,
 }   
})

})
var text2 = document.querySelectorAll('.text2')
text2.forEach(function(val)
{
    gsap.to(val,
    {
      opacity:1,

      ease:'Expo.InOut',
      color:'white',
      scrollTrigger:
      {
        scroller:'body',
        trigger:val,
        start:'top 40%',
        end:'top 40%',
        scrub:3,
        // markers:true
      }

    })
})

var theamsElement = document.querySelector('.theams');

  // Listen for the scroll event
  window.addEventListener('scroll', function() {
    // Calculate the scroll progress
    var scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Change background color based on scroll position
    if (scrollProgress < 0.4) {
      theamsElement.style.background = 'radial-gradient(circle ,#4a00a8 5% , black 90%)';
    } else if (scrollProgress < 0.7) {
      theamsElement.style.background = 'radial-gradient(circle, #eb5620 0%, black 70%)';
    } else if( scrollProgress<0.8)
    {
      theamsElement.style.background = 'radial-gradient(circle, purple, black 90%)';

    }
    
    else  
    {
      theamsElement.style.background = 'radial-gradient(circle ,#4a00a8 5% , black 90%)';

    }
  });