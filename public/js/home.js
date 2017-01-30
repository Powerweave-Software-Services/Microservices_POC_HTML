$(function () {
    //firebase auth handler registration for auth state changed
    const auth = firebase.auth();
    auth.onAuthStateChanged(firebaseUser => {
        console.log("Auth state changed!");
        console.log(firebaseUser);

        if (!firebaseUser) {
            window.location = "index.html";
        }
    });

    //Fetching Products Data
    $.ajax({
        method: "GET",
        url: "http://alfredproducts.gear.host/api/product"
    })
        .done(function (products) {
            //alert("Data Received: " + JSON.stringify(msg));
            alert(products.length);
        });

    //Fetching Orders Data
    $.ajax({
        method: "GET",
        url: "http://alfredorders.gear.host/orders_api.php"
    })
        .done(function (orders) {
            //alert("Data Received: " + JSON.stringify(msg));
            alert(orders.length);
        });

});