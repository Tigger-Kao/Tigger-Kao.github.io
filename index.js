(function () {
    //* menu
    var icon = document.getElementById("icon");
    var icon1 = document.getElementById("a");
    var icon2 = document.getElementById("b");
    var icon3 = document.getElementById("c");
    var nav = document.getElementById('nav');

    icon.addEventListener('click', function () {
        icon1.classList.toggle('a');
        icon2.classList.toggle('c');
        icon3.classList.toggle('b');
        nav.classList.toggle('show');
    });

    $('nav .row a').click(function () {
        nav.classList.toggle('show');
    })

    //* middle_buttons 
    let sections = document.querySelectorAll('.section')
    let m_btns = document.querySelectorAll('.m_button')
    let menu_btns = document.querySelectorAll('nav .row .menu_btn')
    m_btns.forEach((btn, index) => {
        btn.onclick = function () {
            removeActive_m();
            btn.classList.add('active');
            sections[index].classList.add('active');
        }
    })
    // menu button
    menu_btns.forEach((btn, index) => {
        btn.onclick = function () {
            removeActive_m();
            sections[index].classList.add('active');
        }
    })

    function removeActive_m() {
        m_btns.forEach(btn2 => {
            btn2.classList.remove('active');
        });
        sections.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    //* temple tab
    let buttons = document.querySelectorAll('.button')
    let tabs = document.querySelectorAll('.tab')
    buttons.forEach((btn, index) => {
        btn.onclick = function () {
            removeActive();
            btn.classList.add('active');
            tabs[index].classList.add('active');
        }
    })

    function removeActive() {
        buttons.forEach(btn2 => {
            btn2.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    //* airlie tab
    let buttons2 = document.querySelectorAll('.button2')
    let tabs2 = document.querySelectorAll('.tab2')
    buttons2.forEach((btn, index) => {
        btn.onclick = function () {
            removeActive2();
            btn.classList.add('active');
            tabs2[index].classList.add('active');
        }
    })

    function removeActive2() {
        buttons2.forEach(btn2 => {
            btn2.classList.remove('active');
        });
        tabs2.forEach(tab => {
            tab.classList.remove('active');
        });
    }
    //* web tab
    let allweb = document.querySelectorAll('.website')
    let webpages = document.querySelectorAll('.webpage')
    webpages.forEach((page, index) => {
        page.onclick = function () {
            removeActive_web();
            page.classList.add('active');
            allweb[index].classList.add('active');
        }
    })

    function removeActive_web() {
        webpages.forEach(page => {
            page.classList.remove('active');
        });
        allweb.forEach(web => {
            web.classList.remove('active');
        });
    }

    //* cd slick
    $(document).ready(function () {
        var $slider = $('.slider');
        // var $progressBar = $('.progress');
        var $progressBarLabel = $('.slider__label');

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
            // $progressBar
            // .css('background-size', calc + '% 100%')
            // .attr('aria-valuenow', calc);
            $progressBarLabel.text(calc + '% completed');
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 400,
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    });

    //* cd lightbox
    $(document).ready(function () {
        // add all to same gallery
        $(".slider div a").attr("data-fancybox", "mygallery");
        $(".slider div a").fancybox();
    });

    //* photos
    $(document).ready(function () {
        // add all to same gallery
        $(".items a").attr("data-fancybox", "mygallery");
        // start fancybox:
        $(".items a").fancybox();
    });

})()