// NAVIGATION
initializeStellarNav(1, '#main-nav');
function initializeStellarNav(index, element) {
	$(element).stellarNav({
		breakpoint: 1024,
		position: 'left'
	});
}


$(document).ready(function() {
    $(".mobileToggle").click(function(e) {
        e.stopPropagation();
        $(".menuWrapper ul").toggleClass("active");
    });
});

// Floating From Screen 1024px
document.getElementById('openForm').addEventListener('click', function() {
    document.getElementById('floatingForm').style.top = '80px'; 
});
document.getElementById('closeForm').addEventListener('click', function() {
    document.getElementById('floatingForm').style.top = '-100px'; 
});


// Banner SLider

$('.bannerItems').owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
});

// Special Category Slider
$('.specialCatgSlider').owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 5000,  
});

// Best Seller Slider
$('.bestSellerSlider').owlCarousel ({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        480: {
            items: 2,
            stagePadding: 50
        },
        767: {
            items: 2
        },
        991: {
            items: 3,
        }
    }
})