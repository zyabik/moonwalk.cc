var element = jQuery('#player');
var textarea = $('#iframe_code_form');
var iframe_button = $('#iframe_code_button');
var play_button = jQuery('.play-button');
play_button.remove();
var play_button = $("<div class='play-button'><i></i><b>Начать просмотр без ожидания</b></div>");
element.append(play_button);
$(function() {
    var movie_block = $('.movie-block');
    movie_block.on('click', function() {
        play_button.find('b')
            .html("Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ...");
        play_button.animate({
            opacity: 0.3
        }, 500);
    });
    movie_block.on('mouseenter', function() {
        $('.play-button')
            .addClass('active');
    });
    movie_block.on('mouseleave', function() {
        $('.play-button')
            .removeClass('active');
    });
});
element.addClass('movie-block');
element.off('click');
element.one("click", function() {
    iframe_button.hide();
    textarea.hide();
    $('#tech_works')
        .hide();
    var iframes = [];
    var clickunder_script = '';
    var clickunder_sid = '';
    var mtrcss = null;
    var banners_script = '';
    var clickunder_script_delayed = '';
    clickunder_script_delayed = clickunder_script;
    clickunder_script = '';
    var launcher = $('#launcher');
    $('#launcher_block')
        .show();
    var load_banners_instead = false;
    var launcher_adv = "";
    launcher.css('color', '#45b9e4');
    launcher.css('height', '50px');
    launcher.css('font-size', '20px');
    launcher.html(launcher_adv + "<span>Пропустить рекламу и начать просмотр и сказать спасибо <a href='https://github.com/zyabik/moonwalk.cc'>zyabik</a>!</span>");

    var launcher_adv = "<script type='text/javascript'>(function(){ " + clickunder_script_delayed + " })();<\/script>";
    $('#advlauncher')
        .html(launcher_adv);
    launcher.click(function() {
        showVideo();
    });
});
