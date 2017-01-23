//Global Variables/Constants
const auth = firebase.auth();

//Sign in
$(document).on("click", ".btnLogin", function () {
    //get email and password
    var username = $("#txtLoginUsername").val();
    var password = $("#txtLoginPassword").val();

    //sign in
    console.log("trying signin with: " + username + " " + password);
    const promise = auth.signInWithEmailAndPassword(username, password);

    //error handling
    promise.catch(e => console.log(e.message));
});

//Create user
$(document).on("click", "#register-submit-btn", function () {
    //get email and password
    var username = $("#txtRegisterUsername").val();
    var password = $("#txtRegisterPassword").val();
    var confirmPassword = $("#txtRegisterConfirmPassword").val();

    if (confirmPassword == password) {
        //sign in
        console.log("trying signin with: " + username + " " + password);
        const promise = auth.createUserWithEmailAndPassword(username, password);

        //error handling
        promise.catch(e => console.log(e.message));
    }
    else {
        alert("Password and confirm password fields do not match.");
    }
});

$(function () {
    auth.signOut();
    auth.onAuthStateChanged(firebaseUser => {
        console.log("Auth state changed!");
        console.log(firebaseUser);

        if (firebaseUser) {
            window.location = "index.html";
        }
    });
});

$(document).on("click", "#btnFacebookLogin", function () {
    console.log("trying to sign in through facebook.");
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        //logging the error received.
        console.log(error);
    });
});