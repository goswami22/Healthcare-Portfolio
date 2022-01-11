    $(() => {
        $(window).scroll(function(){
            if($(this).scrollTop()) {
                $("#header").addClass("scroll-nav");
            }else{
                $("#header").removeClass("scroll-nav");
            }
        });
    });


$('#offers .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText : ['<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>', '<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2 
        }
    }
})

$('#few-word .owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#packages .owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:31,
    nav:true,
    dots: true,
    navText : ['<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>', '<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('#checkups .owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:0,
    nav:true,
    dots: true,
    navText : ['<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>', '<svg width="20" height="16" fill="none" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><path d="m1 8h18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path d="m12 1 7 7-7 7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>' ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})



$(() => {
    $("#signup").click(function(){
        $('#signup-popup').modal('hide');
     });

     $("#new-account-btn").click(function(){
        $("#signin-popup").modal('hide');
     });
});