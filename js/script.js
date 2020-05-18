// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function () {

  $('.card-caption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  const $nav = $('#gnav');
  const offset = $nav.offset();
  const navHeight = $nav.innerHeight();
  const headerInner = $('#header .inner');

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    const speed = 300;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //ページトップへもどる
  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

});

// 読み込んだらフェードアウト
$(window).load(function () {
  // 消えるタイミング
  $('.loading').delay(1500).fadeOut(300);
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
  $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);

// ハンバーガー
(function($) {
  $(function () {
      $('#nav-toggle').on('click', function() {
          $('body').toggleClass('open');
      });
      // メニュー閉じ
      $('nav a').on('click', function() {
          $('#nav-toggle').trigger('click');
      });
  });
})(jQuery);

///ページ内リンク
$('a.click-btn').click(function() {
  // スクロールの速度
  const speed = 500; // ミリ秒で記述
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? 'html' : href);
  const position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

// フェードインPAGETOPボタン
$(function() {
  const topBtn = $('#page-top');    
  topBtn.hide();
  //スクロールが指定数値に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});

/* アコーディオン */
$(".accordion-wrap").on("click", function(){   
  $(this).children().eq(1).slideToggle(300);  
  $(this).children().eq(0).toggleClass("accordion-no-bar");
  $(this).siblings().find(".accordion-header").removeClass("accordion-line");
  $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
  $(this).find(".accordion-header").toggleClass("accordion-line");
  $(this).find(".fa").toggleClass("rotate-fa");

  $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});

// 下からフェードイン
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          const position = $(this).offset().top;
          const scroll = $(window).scrollTop();
          const windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
          }
      });
  });
});

// CONTACT
const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);

