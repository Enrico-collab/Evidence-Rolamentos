// carrosel marcas
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    items: 6,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 3 }, // Em telas pequenas (até 425px), exibe 2 marcas
      426: { items: 4 }, // Em telas médias, exibe 4 marcas
      430: { items: 3 },
      768: { items: 6 }, // Em telas maiores, exibe 6 marcas
      1024: { items: 8 }, // Em telas grandes, exibe todas
    },
  });
});
