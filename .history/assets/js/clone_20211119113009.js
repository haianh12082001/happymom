$(function () {
    ///Page
    var recentRadius = $('.recent__radius');
    var recentItem = $('.recent__item');
    for (i = 0; i < 3; i++) {
        recentItem.clone().appendTo(recentRadius);
    }
    var tabNewsList = $('.tabNews__list');
    var tabNewsItem = $('.tabNews__item');
    for (i = 0; i < 7; i++) {
        tabNewsItem.clone().appendTo(tabNewsList);
    }
    // feedback
    var feedbackList = $('.feedback__list');
    var feedbackItem = $('.feedback__item');
    for (i = 0; i < 3; i++) {
        feedbackItem.clone().appendTo(feedbackList);
    }
    // new
    var newsList = $('.news__list');
    var newsItem = $('.news__item');
    for (i = 0; i < 4; i++) {
        newsItem.clone().appendTo(newsList);
    }
})