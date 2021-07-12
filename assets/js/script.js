//начало jquery документа
jQuery(document).ready(function () {
	//	FORMS
	jQuery('.send').click(function () {
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					form.html(data);
					form.css('opacity', '1');
				},
				error: function () {}
			});
		}
	});

	//бургер меню

	var burgerCtr = document.querySelector("#burger-menu");
	var menuCtr = document.querySelector("#mobile-menu");
	burgerCtr.addEventListener("click", function () {
		this.classList.toggle("active");
		menuCtr.classList.toggle("show_mobile_menu");
	});

	//бургер меню




	// скрипт табов //
	$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
	// скрипт табов //

	//	навигация мобильное меню

	jQuery(".m11").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec3").offset().top - 60
		}, 400);
		jQuery('#burger-menu').click();
	});

	jQuery(".m22").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec4").offset().top - 40
		}, 400);
		jQuery('#burger-menu').click();
	});

	jQuery(".m33").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec5").offset().top - 40
		}, 400);
		jQuery('#burger-menu').click();
	});

	jQuery(".m44").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery("footer").offset().top - 40
		}, 400);
		jQuery('#burger-menu').click();
	});

	//	навигация мобильное меню


	//	навигация меню большой экран

	jQuery(".m1").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec3").offset().top
		}, 400);
	});

	jQuery(".m2").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec4").offset().top
		}, 400);
	});

	jQuery(".m3").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec5").offset().top
		}, 400);
	});

	jQuery(".m4").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery("footer").offset().top
		}, 400);
	});

	jQuery(".m0").click(function () {
		jQuery('html, body').animate({
			scrollTop: jQuery(".sec1").offset().top
		}, 400);
	});


	//	навигация меню большой экран

	//	все отзывы

	$(".main-btn").click(function () {

		$(".block_item.hidden").slideToggle(500);
		$(".main-btn").toggleClass("ano_btn");


	});

	//	все отзывы

	//	отзыв полностью

	$(".read-more-btn").click(function () {

		$(this).toggleClass('read-more-btn-hide');
		$(this).parent().prev().find('.pointers').toggleClass('hide');
		$(this).parent().prev().find('.txt-add').toggleClass('hide');

	});

	//	отзыв полностью


	//	конец  jquery документа


});

//слайдер со стрелочками 

var swiper = new Swiper('.swiper_vegicle', {
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},

});

//слайдер со стрелочками 

var swiper = new Swiper('.swiper-container', {
	observer: true,
	observeParents: true,

	pagination: {
		el: '.swiper-pagination',
	},

});
