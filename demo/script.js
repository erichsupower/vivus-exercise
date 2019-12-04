const animCoffee = new Vivus('coffee', {
    duration: 200,
    file: 'images/coffee.svg',
    start: 'autostart',
    pathTimingFunction: Vivus.EASE_OUT_BOUNCE
}, function () {
    // The property 'map' contain all the SVG mapping
    console.table(animPhone.map);
});

const animPhone = new Vivus('phone', {
    duration: 200,
    file: 'images/phone.svg',
    start: 'manual',
});

const animCross = new Vivus('cross', {
    duration: 200,
    file: 'images/cross.svg'
});

var sectionPhone = new Waypoint({
    element: document.getElementById('coffee'),
    handler: function (direction) {
        animCoffee.reset().play(1);
        animCross.reset().play(1);
    },
    offset: '-100%'
});

var sectionCross = new Waypoint({
    element: document.getElementById('phone'),
    start: 'autostart',
    handler: function (direction) {
        if (direction === "up") {
            animCross.play(-2);
        }
        z = direction;
        console.log("scroll " + z);
    },
    offset: '-100%'
});

// 建立變數 x 儲存數值
var x = 0;

// 建立變數 currentScroll 用來儲存目前頁面滾動的數值
var currentScroll;

// 建立變數 previousScroll 用來儲存頁面上一個滾動的數值
var previousScroll = 0;

function lineAnimation(event) {

    // 限制 x 的數值範圍在 0 ~ 1 之間
    if (x < 0) {
        x = 0
    } else if (x > 1) {
        x = 1
    }

    // currentScroll 寫入目前頁面的高度
    currentScroll = $(this).scrollTop();

    if (currentScroll > previousScroll) {
        // 頁面 down 時…
        animPhone.setFrameProgress(x += 0.007);
    } else {
        // 頁面 up 時…
        animPhone.setFrameProgress(x -= 0.007);
    }

    // previousScroll 更新為目前頁面的高度
    previousScroll = currentScroll;
}

$(document).bind('scroll', function (event) {
    lineAnimation(event);
});