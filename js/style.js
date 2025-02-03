$(document).ready(function () {
  // 햄버거바 클릭
  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  // 모바일용 메뉴 클릭시
  $(".mobile-nav .gnb > li > a").click(function () {
    // console.log(this);
    $(this).next(".mobile-nav .gnb .depth2").stop().slideToggle();
  });
  // 모바일용 메뉴 닫기 버튼
  $("#close-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: "-300px", //메뉴가 오른쪽 밖으로 나가도록함
      },
      300
    );
  });
  $(".nav > .gnb ").hover(
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
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
      el: ".proSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      786: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    },
  });
  //메뉴 슬라이드
  var swiper = new Swiper(".menuSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
      el: ".menuSwiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      786: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
    },
  });
});
window.onload = function () {
  const footer = document.querySelector(".footer");
  const topButton = document.querySelector(".top-btn-wrap");
  // 스크롤 이벤트
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    // 스크롤 위치가 300px 이상이면 버튼 표시
    if (window.scrollY > 200) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }

    // 푸터와 겹치지 않도록 버튼 위치 조정
    const footerRect = footer.getBoundingClientRect();
    // const buttonHeight = topButton.offsetHeight;

    if (footerRect.top < window.innerHeight) {
      topButton.style.bottom = `${window.innerHeight - footerRect.top + 50}px`;
    } else {
      topButton.style.bottom = "50px";
    }
  });
};
