/* Plugins */

//= ../../node_modules/jquery/dist/jquery.min.js
////= ../../node_modules/popper.js/dist/umd/popper.min.js
////= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
////= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');        

showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }  
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none'); //перебрать все слайды и скрыть их

    dots.forEach((item) => item.classList.remove('dot-active')); //перебрать все точки и удалить класс

    slides[slideIndex - 1].style.display = 'block'; //показать один слайд

    dots[slideIndex - 1].classList.add('dot-active'); //добавить клас к активной точке
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

function currentSlide (n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length+1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});

setInterval(plusSlides(1), 2000);



    $('form').submit(function(){
        // e.preventDefault(); //отключение перезагрузки страницы при отправке формы
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("1");
            // $('#consultation, #order').fadeOut();
            // $('.overlay, #thanks').fadeIn('slow');
            console.log('ok');

            // document.location.href = ("http://ru.stackoverflow.com"); редирект на thank you page

            $('form').trigger('reset');

        });
        return false;
    });

    //scrolup

    $(window).scroll(function() {
            if($(this).scrollTop() > 1200) {
                $('.skrollup').addClass('skrollup-active');
            } else if ($(this).scrollTop() < 1200) {
                $('.skrollup').removeClass('skrollup-active');
            }
        });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

});

    
