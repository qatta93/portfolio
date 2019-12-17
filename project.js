// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("navi").style.top = "0";
//   } else {
//     document.getElementsByClassName("navi").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// $(function(){
//     var scroll = $(document).scrollTop();
//     var navHeight = $('.navi').outerHeight();

//     $(window).scroll(function(){
//         var scrolled = $(document).scrollTop();

//         if(scrolled > navHeight){
//             $('.navi').addClass('animate');
//         }else{
//             $('.navi').removeClass('animate');
//         }

//         if(scrolled > scroll){
//             $('.navi').removeClass('sticky');
//         }else{
//             $('.navi').addClass('sticky');
//         }

//         scroll = $(document).scrollTop();
//     });
// });

// $(document).ready(function () {
  
//     'use strict';
    
//      var c, currentScrollTop = 0,
//          navbar = $('header');
  
//      $(window).scroll(function () {
//         var a = $(window).scrollTop();
//         var b = navbar.height();
       
//         currentScrollTop = a;
       
//         if (c < currentScrollTop && a > b + b) {
//           navbar.addClass("animate");
//         } else if (c > currentScrollTop && !(a <= b)) {
//           navbar.removeClass("animate");
//         }
//         c = currentScrollTop;
//     });
    
//   });

