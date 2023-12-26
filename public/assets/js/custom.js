// JavaScript Document


$(window).on('load', function () {

	"use strict";

	/*----------------------------------------------------*/
	/*	Preloader
	/*----------------------------------------------------*/

	var preloader = $('#loading'),
		loader = preloader.find('#loading-center');
	loader.fadeOut();
	preloader.delay(400).fadeOut('slow');


	/*----------------------------------------------------*/
	/*	Modal Window
	/*----------------------------------------------------*/

	setTimeout(function () {
		$(".modal:not(.auto-off)").modal("show");
	}, 3600);

});


$(window).on('scroll', function () {

	"use strict";

	/*----------------------------------------------------*/
	/*	Navigtion Menu Scroll
	/*----------------------------------------------------*/

	var b = $(window).scrollTop();

	if (b > 80) {
		$(".wsmainfull").addClass("scroll");
	} else {
		$(".wsmainfull").removeClass("scroll");
	}

});


$(document).ready(function () {

	"use strict";


	if (window.innerWidth > 768) {
		new WOW().init();
	}


	/*----------------------------------------------------*/
	/*	Mobile Menu Toggle
	/*----------------------------------------------------*/

	if ($(window).outerWidth() < 992) {
		$('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li').on('click', function () {
			$('body').removeClass("wsactive");
			$('.sub-menu').slideUp('slow');
			$('.wsmegamenu').slideUp('slow');
			$('.wsmenu-click').removeClass("ws-activearrow");
			$('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
		});
	}

	if ($(window).outerWidth() < 992) {
		$('.wsanimated-arrow').on('click', function () {
			$('.sub-menu').slideUp('slow');
			$('.wsmegamenu').slideUp('slow');
			$('.wsmenu-click').removeClass("ws-activearrow");
			$('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
		});
	}


	/*----------------------------------------------------*/
	/*	Accordion
	/*----------------------------------------------------*/

	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

	$(".accordion > .accordion-item").on('click', function () {
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});


	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/

	$('ul.tabs-1 li').on('click', function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});


	/*----------------------------------------------------*/
	/*	Single Image Lightbox
	/*----------------------------------------------------*/

	$('.image-link').magnificPopup({
		type: 'image'
	});


	/*----------------------------------------------------*/
	/*	Video Link #1 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup1').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/SZEflIVnhH8'
				}
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Video Link #2 Lightbox
	/*----------------------------------------------------*/

	$('.video-popup2').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com',
					src: 'https://www.youtube.com/embed/yDNWVRmRHlY'
				}
			}
		}
	});



	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$('.count-element').each(function () {
		$(this).appear(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}, { accX: 0, accY: 0 });
	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	var owl = $('.reviews-1-wrapper');
	owl.owlCarousel({
		items: 3,
		loop: true,
		autoplay: true,
		navBy: 1,
		autoplayTimeout: 4500,
		autoplayHoverPause: true,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Show Password
	/*----------------------------------------------------*/

	var showPass = 0;
	$('.btn-show-pass').on('click', function () {
		if (showPass == 0) {
			$(this).next('input').attr('type', 'text');
			$(this).find('span.eye-pass').removeClass('flaticon-visibility');
			$(this).find('span.eye-pass').addClass('flaticon-invisible');
			showPass = 1;
		}
		else {
			$(this).next('input').attr('type', 'password');
			$(this).find('span.eye-pass').addClass('flaticon-visibility');
			$(this).find('span.eye-pass').removeClass('flaticon-invisible');
			showPass = 0;
		}

	});


	/*----------------------------------------------------*/
	/*	Newsletter Subscribe Form
	/*----------------------------------------------------*/

	$('.fbox-6').click(function () {
		$(this).toggleClass('active');
	});
});

$(document).ready(function () {
	var indSelect = {
		"1": "Mehrfamilienhaus",
		"2": "Umbau",
		"3": "Büro",
		"4": "Werkstatt",
		"5": "Lagerhalle",
		"6": "Produktion",
	};

	var priSelect = {
		"1": "Haus",
	};

	$('#select1').change(function () {
		var $mySelect = $('#select2');
		$mySelect.empty(); // Remove existing options

		if ($(this).val() == 'Industrie') {
			$.each(indSelect, function (key, value) {
				var $option = $("<option/>", {
					value: key,
					text: value
				});
				$mySelect.append($option);
			});
		} else {
			$.each(priSelect, function (key, value) {
				var $option = $("<option/>", {
					value: key,
					text: value
				});
				$mySelect.append($option);
			});
		}
	});

});

function populateSelect() {

	var residencyCountry = [{
		"countryId": "1",
		"countryName": "Albania",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "2",
		"countryName": "Algeria",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "4",
		"countryName": "Andorra",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "5",
		"countryName": "Angola",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "6",
		"countryName": "Anguilla",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "8",
		"countryName": "Antigua and Barbuda",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "9",
		"countryName": "Argentina",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "10",
		"countryName": "Armenia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "11",
		"countryName": "Aruba",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "12",
		"countryName": "Australia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "13",
		"countryName": "Austria",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "14",
		"countryName": "Azerbaijan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "15",
		"countryName": "Bahamas",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "16",
		"countryName": "Bahrain",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "17",
		"countryName": "Bangladesh",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "18",
		"countryName": "Barbados",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "20",
		"countryName": "Belgium",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "21",
		"countryName": "Belize",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "22",
		"countryName": "Benin",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "23",
		"countryName": "Bermuda",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "25",
		"countryName": "Bolivia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "26",
		"countryName": "Bosnia and Herzegovina",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "27",
		"countryName": "Botswana",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "29",
		"countryName": "Brazil",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "31",
		"countryName": "Brunei",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "32",
		"countryName": "Bulgaria",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "34",
		"countryName": "Burundi",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "35",
		"countryName": "Cambodia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "36",
		"countryName": "Cameroon",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "38",
		"countryName": "Cape Verde",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "39",
		"countryName": "Cayman Islands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "41",
		"countryName": "Chad",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "239",
		"countryName": "Channel Islands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "42",
		"countryName": "Chile",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "43",
		"countryName": "China",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "46",
		"countryName": "Colombia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "51",
		"countryName": "Costa Rica",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "53",
		"countryName": "Croatia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "55",
		"countryName": "Cyprus",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "56",
		"countryName": "Czech Republic",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "57",
		"countryName": "Denmark",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "58",
		"countryName": "Djibouti",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "59",
		"countryName": "Dominica",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "60",
		"countryName": "Dominican Republic",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "61",
		"countryName": "East Timor",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "62",
		"countryName": "Ecuador",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "63",
		"countryName": "Egypt",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "64",
		"countryName": "El Salvador",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "67",
		"countryName": "Estonia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "68",
		"countryName": "Ethiopia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "69",
		"countryName": "Falkland Islands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "71",
		"countryName": "Fiji",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "72",
		"countryName": "Finland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "73",
		"countryName": "France",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "74",
		"countryName": "French Guiana",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "75",
		"countryName": "French Polynesia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "77",
		"countryName": "Gabon",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "78",
		"countryName": "Gambia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "79",
		"countryName": "Georgia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "80",
		"countryName": "Germany",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "81",
		"countryName": "Ghana",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "82",
		"countryName": "Gibraltar",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "83",
		"countryName": "Greece",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "84",
		"countryName": "Greenland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "85",
		"countryName": "Grenada",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "86",
		"countryName": "Guadeloupe",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "88",
		"countryName": "Guatemala",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "250",
		"countryName": "Guernsey",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "91",
		"countryName": "Guyana",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "92",
		"countryName": "Haiti",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "95",
		"countryName": "Honduras",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "96",
		"countryName": "Hong Kong",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "97",
		"countryName": "Hungary",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "98",
		"countryName": "Iceland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "99",
		"countryName": "India",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "100",
		"countryName": "Indonesia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "103",
		"countryName": "Ireland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "240",
		"countryName": "Isle of Man",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "104",
		"countryName": "Israel",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "105",
		"countryName": "Italy",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "106",
		"countryName": "Jamaica",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "107",
		"countryName": "Japan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "249",
		"countryName": "Jersey",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "108",
		"countryName": "Jordan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "109",
		"countryName": "Kazakhstan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "110",
		"countryName": "Kenya",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "244",
		"countryName": "Kosovo",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "114",
		"countryName": "Kuwait",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "115",
		"countryName": "Kyrgyzstan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "116",
		"countryName": "Lao",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "117",
		"countryName": "Latvia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "119",
		"countryName": "Lesotho",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "120",
		"countryName": "Liberia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "122",
		"countryName": "Liechtenstein",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "123",
		"countryName": "Lithuania",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "124",
		"countryName": "Luxembourg",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "125",
		"countryName": "Macau",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "126",
		"countryName": "Macedonia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "127",
		"countryName": "Madagascar",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "128",
		"countryName": "Malawi",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "129",
		"countryName": "Malaysia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "130",
		"countryName": "Maldives",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "132",
		"countryName": "Malta",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "133",
		"countryName": "Marshall Islands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "134",
		"countryName": "Martinique",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "135",
		"countryName": "Mauritania",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "136",
		"countryName": "Mauritius",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "137",
		"countryName": "Mayotte",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "138",
		"countryName": "Mexico",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "139",
		"countryName": "Micronesia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "140",
		"countryName": "Moldova",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "141",
		"countryName": "Monaco",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "142",
		"countryName": "Mongolia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "243",
		"countryName": "Montenegro",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "143",
		"countryName": "Montserrat",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "144",
		"countryName": "Morocco",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "145",
		"countryName": "Mozambique",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "147",
		"countryName": "Namibia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "149",
		"countryName": "Nepal",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "150",
		"countryName": "Netherlands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "152",
		"countryName": "New Caledonia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "154",
		"countryName": "Nicaragua",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "155",
		"countryName": "Niger",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "160",
		"countryName": "Norway",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "161",
		"countryName": "Oman",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "162",
		"countryName": "Pakistan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "164",
		"countryName": "Occupied",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "165",
		"countryName": "Panama",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "166",
		"countryName": "Papua New Guinea",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "167",
		"countryName": "Paraguay",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "168",
		"countryName": "Peru",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "169",
		"countryName": "Philippines",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "171",
		"countryName": "Poland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "172",
		"countryName": "Portugal",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "174",
		"countryName": "Qatar",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "176",
		"countryName": "Romania",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "177",
		"countryName": "Russia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "178",
		"countryName": "Rwanda",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "179",
		"countryName": "Saint Helena",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "180",
		"countryName": "Saint Kitts and Nevis",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "181",
		"countryName": "Saint Lucia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "183",
		"countryName": "Saint Vincent",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "184",
		"countryName": "Samoa",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "185",
		"countryName": "San Marino",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "186",
		"countryName": "Sao Tome",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "187",
		"countryName": "Saudi Arabia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "188",
		"countryName": "Senegal",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "242",
		"countryName": "Serbia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "189",
		"countryName": "Seychelles",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "191",
		"countryName": "Singapore",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "192",
		"countryName": "Slovakia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "193",
		"countryName": "Slovenia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "196",
		"countryName": "South Africa",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "112",
		"countryName": "South Korea",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "198",
		"countryName": "Spain",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "199",
		"countryName": "Sri Lanka",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "201",
		"countryName": "Suriname",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "203",
		"countryName": "Swaziland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "204",
		"countryName": "Sweden",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "205",
		"countryName": "Switzerland",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "207",
		"countryName": "Taiwan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "208",
		"countryName": "Tajikistan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "209",
		"countryName": "Tanzania",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "210",
		"countryName": "Thailand",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "211",
		"countryName": "Togo",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "213",
		"countryName": "Tonga",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "214",
		"countryName": "Trinidad and Tobago",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "215",
		"countryName": "Tunisia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "216",
		"countryName": "Turkey",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "217",
		"countryName": "Turkmenistan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "218",
		"countryName": "Turks",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "220",
		"countryName": "Uganda",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "221",
		"countryName": "Ukraine",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "222",
		"countryName": "United Arab Emirates",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "223",
		"countryName": "United Kingdom",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "226",
		"countryName": "Uruguay",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "227",
		"countryName": "Uzbekistan",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "229",
		"countryName": "Venezuela",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "230",
		"countryName": "Vietnam",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "231",
		"countryName": "Virgin Islands",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "233",
		"countryName": "Wallis and Futuna",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}, {
		"countryId": "237",
		"countryName": "Zambia",
		"fxSbAllowed": true,
		"cfdAllowed": true,
		"message": null
	}];

	var i = 0;
	var countries = [];
	for (i; i < residencyCountry.length; i++) {
		countries.push(residencyCountry[i].countryName);
	}
	// console.log(countries);
	$('#countries').html(
		$.map(countries, function (val, index) {
			return '<option value="' + index + '">' + val + '</option>';
		})
	);
}
populateSelect();