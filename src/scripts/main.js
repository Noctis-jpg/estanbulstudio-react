import $ from "jquery";



$( document ).ready(function() {

// API'den verileri al
$.get('/api/home-page-main-sliders', function(veriler) {
    // Verileri işle ve öğelere sınıf adlarını ekle
    var tekrarEdenler = $('.ymHomeslide');
    tekrarEdenler.each(function(index) {
      $(this).addClass('farkli-sinif-' + index);
    });
  });

});