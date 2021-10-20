const similarProductSlider = () => {
  $(document).ready(function () {
    $('.similar-slider').slick({
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
      mobileFirst: true,
    });
  });
};

export default similarProductSlider;
