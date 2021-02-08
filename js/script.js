$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll: 1,
		autoplay:false,
		speed:500,
		responsive:[
			{
				breakpoint: 1275,
				settings: {
					slidesToShow:3,
					slidesToScroll:1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:2,
					slidesToScroll:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

