
		$(document).ready(function(){
    // Создаем переменые для кнопки и для меню
		var pull = $("#navigation__toggle");
		var menu = $(".navigation ul");

    // Описываем событие при нажатии на кнопку
			$(pull).on("click", function(e){

	 // Отменяем стандартное поведение ссылки в браузере
			e.preventDefault();

  // Открываем/Скрываем меню
			menu.slideToggle();

  // Добавляем модификатор --active
  $(this).toggleClass('navigation__toggle-button--active');
	  
		});
			
 // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
		$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && menu.is(':hidden')) {
		menu.removeAttr('style');
		}
		});
	// Вызов слайдера owl-carousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText : ["",""],
		slideSpeed: 600
	});

	});
