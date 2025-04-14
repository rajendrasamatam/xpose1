import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            sendEmailVerification(user).then(() => {
                alert("Verification email sent. Please check your inbox.");
                window.location.href = "index.html"; // Redirect to login after signup
            });
        })
        .catch((error) => {
            alert(error.message);
        });
});
