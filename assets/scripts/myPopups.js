$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'inline',
    });
    $('.send-sms, .send-response').magnificPopup({
        items: {
            src: '#message-sent',
        },
    });
    $('.request-an-act').magnificPopup({
        items: {
            src: '#request-act',
        },
    });
    $('.button-restore').magnificPopup({
        items: {
            src: '#check-yuor-email',
        },
    });
    $('.activities__item').magnificPopup({
        items: {
            src: '#line-of-business',
        },
    });
    $('.contact-with-manager').magnificPopup({
        items: {
            src: '#need-help',
        },
    });
    $('.baskets__to-clear').magnificPopup({
        items: {
            src: '#delite-allproduct',
        },
    });
    $('.custom, .feedback__button').magnificPopup({
        items: {
            src: '#custom-approval',
        },
    });
    $('.limited').magnificPopup({
        items: {
            src: '#limit-exceeded',
        },
    });
    $('.control__button').magnificPopup({
        items: {
            src: '#delete-selected-list',
        },
    });

    $('.sidebar-lk__link_claim, .claim, .submitaclaim').magnificPopup({
        items: {
            src: '#making-claim',
        },
    });

    $('.del-card-matrix').magnificPopup({
        items: {
            src: '#editing-matrix',
        },
    });

    $('.filter-matrix__button').magnificPopup({
        items: {
            src: '#extend-matrix',
        },
    });
    $('.button-reg').magnificPopup({
        items: {
            src: '#reg-step2',
        },
    });
    $('.button-reg2').magnificPopup({
        items: {
            src: '#reg-step3',
        },
    });
    $('.button-reg-end').magnificPopup({
        items: {
            src: '#expect-call',
        },
    });

    $('.header-autoriz-link, .exit-burger').magnificPopup({
        items: {
            src: '#autoriz',
        },
    });

    $('.button-request').magnificPopup({
        items: {
            src: '#request-prise',
        },
    });

    $('.button-respond').magnificPopup({
        items: {
            src: '#respond',
        },
    });

    $.extend(true, $.magnificPopup.defaults, {
        removalDelay: 250,
        mainClass: 'mfp-with-fade',
        fixedContentPos: false,
        callbacks: {
            open: function () {
                $('body').css('overflow', 'hidden');
            },
            close: function () {
                $('body').css('overflow', '');
            },
        }
    })

});



$('._ok').click(function () {
    $.magnificPopup.close();
});

