$(document).ready(function() {
    $(".div_1").slideDown(2000, function() {
        $(".Section").fadeIn(1000);
        $(".wrapper").fadeIn(1000);
        $(".btn_1").fadeIn(1000);
    });
    $(".btn_1").click(function() {
        $(".div_1").slideUp(2500);
        $(".Box").fadeIn(4000);
        $(".wrapper").fadeOut(2000);
    });
    var click = 1;
    $(".btn").click(function() {
        var images = [url("https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/11/whole-grain-pancake-stack.jpg?w=640&ssl=1", "https://upload.wikimedia.org/wikipedia/commons/6/6f/Eggs_Benedict-01-cropped.jpg", "https://www.cookingclassy.com/wp-content/uploads/2016/04/strawberry_shortcake_trifles2..jpg")],
            title = ["Butter Pancakes", "Eggs Benedict", "Strawberry Shortcake Trifle"],
            main_course = ["1 stack of pancakes", "salmon baked", "Filet Mignon"],
            content_1 = ["1 Cup Vanilla Icecream", "Hollindase sauce", "1 bowl of salad"],
            content_2 = ["Maple Syrup", "Greens", "Curry"],
            content_3 = ["1 bowl of fruit", "Flavoured Yoghurt", "Wine"],
            price = ["Rs. 1000", "Rs. 1200", "Rs. 1700"];

        if (click > images.length - 1) {
            click = 0;
        }
        $(".image").css("background-image", images[click]);
        $("title").html(title[click]);
        $(".main").html(main_course[click]);
        $(".content_1").html(content_1[click]);
        $(".content_2").html(content_2[click]);
        $("content_3").html(content_3[click]);
        $(".price").html(price[click]);
        click++;
    });
});