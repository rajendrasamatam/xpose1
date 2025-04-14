import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Handle Login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            if (user.emailVerified) {
                alert("Login Successful!");
                window.location.href = "home.html"; // Redirect after login
            } else {
                alert("Please verify your email before logging in.");
            }
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Handle Forgot Password
document.getElementById("forgot-password").addEventListener("click", function () {
    let email = prompt("Enter your email for password reset:");
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
            })
            .catch((error) => {
                alert(error.message);
            });
    }
});
