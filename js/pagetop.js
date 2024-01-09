// pagetop.js
$(document).ready(function () {
    // ページトップへのボタンの表示・非表示を制御
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) { // 例: スクロールが100px以上の場合
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });

    // ページトップへのスムーズなスクロール
    $('#scrollToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800); // 800ミリ秒かけてトップに戻る
        return false;
    });
});
