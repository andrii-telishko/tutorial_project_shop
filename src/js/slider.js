$(document).ready(function () {
        $('.hero__slider').slick({
          dots: true,
          speed: 1000,
          autoplay:true,
          autoplaySpeed:3500,
          responsive:[
            {
               breakpoint: 360,
               settings: {
                 arrows: false
               }
            },
            {
              breakpoint:1631,
              settings: {
                arrows:true
              }
            }
          ],
          mobileFirst:true
        })
      });


   