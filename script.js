{
  var swiper1 = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
  });
}

{
  var swiper3 = new Swiper(".help-banner", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const checkWidth = () => {
  let width = window.innerWidth;
  if (width > 1200) {
    var swiper2 = new Swiper(".sale-banner", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper2 = new Swiper(".sale-banner", {
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
};
checkWidth();
window.addEventListener("resize", checkWidth);
