$(function() {

 // ハンバーガー
 $('.header__hb-btn').click(function(){
   $(this).toggleClass('active')
   $('.header__nav').toggleClass('active')
 })

 $('.header__nav ul li a').click(function(){
   $('.header__hb-btn').removeClass('active')
   $('.header__nav').removeClass('active')
 })

})

