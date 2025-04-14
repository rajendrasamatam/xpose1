const auth = firebase.auth();

document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.sendEmailVerification()
                .then(() => {
                    alert("Verification email sent. Please check your inbox.");
                });
        })
        .catch((error) => {
            alert(error.message);
        });
});
