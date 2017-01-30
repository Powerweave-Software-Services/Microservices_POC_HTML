$(function () {
    //stopping current count up
    $("#spnOrdersCount").attr("data-value", 0).counterUp();
    $("#spnProductsCount").attr("data-value", 0).counterUp();

    //Fetching Products Data
    var products = [];
    $.ajax({
        method: "GET",
        url: "http://alfredproducts.gear.host/api/product"
    })
        .done(function (products) {
            productInfo = products;
            $("#spnProductsCount").attr("data-value", products.length).counterUp();
        });

    //Fetching Orders Data
    $.ajax({
        method: "GET",
        url: "http://alfredorders.gear.host/orders_api.php"
    })
        .done(function (orders) {
            orderInfo = JSON.parse(orders);
            $("#spnOrdersCount").attr("data-value", orderInfo.length).counterUp();
        });
});