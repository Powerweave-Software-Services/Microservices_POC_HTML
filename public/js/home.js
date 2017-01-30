const auth = firebase.auth();
var orderInfo;
var productInfo;

$(function () {
    //firebase auth handler registration for auth state changed
    auth.onAuthStateChanged(firebaseUser => {
        console.log("Auth state changed!");
        console.log(firebaseUser);

        if (!firebaseUser) {
            window.location = "index.html";
        }
    });
});

function LogOut() {
    alert("signing out");
    //sign out the current user
    auth.signOut();
}