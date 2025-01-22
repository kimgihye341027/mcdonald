$(document).ready(function () {
  $(".gnb").hover(
    function () {
      // 메뉴와 배경 동시 표시
      $(this).find(".depth2").stop().slideDown();
      $(".header_bg").stop().slideDown();
    },
    function () {
      // 메뉴와 배경 동시 숨김
      $(this).find(".depth2").stop().slideUp();
      $(".header_bg").stop().slideUp();
    }
  );
  // 배너 슬라이드
  var swiper = new Swiper(".visual-swiper", {
    spaceBetween: 0,
    pagination: {
      el: "visual-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // 다음 버튼
      prevEl: ".swiper-button-prev", // 이전 버튼
    },
    autoplay: {
      delay: 2000, // 자동 슬라이드 간격 (밀리초, 3000ms = 3초)
      disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 자동 슬라이드가 계속 작동
    },
    loop: true, // 슬라이드가 마지막에 도달하면 처음으로 되돌아감
  });
  // 프로모션 슬라이드
  var swiper = new Swiper(".proSwiper", {
    autoplay: {
      delay: 2000, // 자동 슬라이드 간격 (밀리초, 3000ms = 3초)
      disableOnInteraction: false, // 사용자가 슬라이드를 조작해도 자동 슬라이드가 계속 작동
    },
    loop: true, // 슬라이드가 마지막에 도달하면 처음으로 되돌아감
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".proSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      786: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
  });
});
 