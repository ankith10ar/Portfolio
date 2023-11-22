// $("#experience-btn").click(function() {
//     console.log("btn clicked")
//     $('html,body').animate({
//         scrollTop: $("#experience-page").offset().top},
//         'slow');
// });

const experiencePage = document.getElementById("experience-page");
function scrollToExperience() {
    experiencePage.scrollIntoView({behavior:'smooth', block:'start'});
}

const downloadBtnBottom = document.getElementById('download-btn').getBoundingClientRect().bottom;

$('#download-btn-header').hide();
// $('#hamburger-menu').hide();

window.addEventListener('scroll',()=>{
    if(window.scrollY > downloadBtnBottom) {
        $('#download-btn-header').show();
    } else {
        $('#download-btn-header').hide();
    }
});

$('#hamburger-menu').click(() => {
    if ($('.menu-container').css('display')==='none') {
        $('.menu-container').css('display', 'flex');
    } else {
        $('.menu-container').css('display', 'none');
    }
})

$('.menu-container').click(() => {
    $('.menu-container').css('display', 'none');
});

var element = $('#arrow');
var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });

tl.to(element, 0.4, { y: '12', ease: Power1.easeNone });
tl.to(element, 0.2, { y: '0', ease: Power1.easeOut });
tl.to(element, 0.2, { y: '8', ease: Power1.easeNone });
tl.to(element, 0.4, { y: '0', ease: Power1.easeOut });

