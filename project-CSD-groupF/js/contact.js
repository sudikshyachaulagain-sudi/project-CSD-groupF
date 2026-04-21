document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    if(name === "" || email === "" || msg === "") {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("message").innerText = "Message sent successfully!";
    document.getElementById("contactForm").reset();
});