// const tel = window.Telegram.WebApp;
// console.log('aa')
// window.addEventListener('load', function () {
//     var one_sec = false;
//     var loading = setInterval(function () {
//
//         document.getElementById('footer_load').hidden = false;
//         document.getElementById('loading_page').hidden = true;
//         show_page('home','home_btn');
//
//
//         one_sec = true;
//         if (one_sec) {
//             clearInterval(loading);
//         }
//     }, 2000);
// })
document.getElementById('footer_load').hidden = false;
show_page('home','home_btn');
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

var screen_height = window.innerHeight;
if (screen_height < 600) {
    document.getElementsByClassName('plinko-scroll-friend')[0].style.height = screen_height / 3 + "px";
    document.getElementsByClassName('plinko-scroll-earn')[0].style.height = screen_height / 2.5 + "px";
} else {
    document.getElementsByClassName('plinko-scroll-friend')[0].style.height = "200px";
    document.getElementsByClassName('plinko-scroll-earn')[0].style.height = "300px";
}


function show_page(page_name, active_btn) {
    var pages_name_in_list = ['home', 'wallet', 'friend', 'earn', 'players', 'guide']
    for (var i = 0; i < pages_name_in_list.length; i++) {
        document.getElementById(pages_name_in_list[i]).hidden = true;
    }
    document.getElementById(page_name).hidden = false;

    var btn_name_in_list = ['home_btn', 'wallet_btn', 'friend_btn', 'earn_btn']
    for (var i = 0; i < pages_name_in_list.length; i++) {
        var new_class_name = document.getElementById(btn_name_in_list[i]).className.replace(" active", "");
        document.getElementById(btn_name_in_list[i]).className = new_class_name;
    }
    document.getElementById(active_btn).className += ' active';
}


$(document).ready(function () {
    $('.progress-title > span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

document.getElementsByClassName('plinko-loading-spinner')[0].style.left = window.innerWidth/2+"px";
