// Local Storage Function (Remember Me button)
function saveVisit() {
  localStorage.setItem("visited", "yes");
  alert("Saved!");
}

// Cookie Implementation
if (document.cookie.indexOf("user=1") === -1) {
  document.cookie = "user=1";
  console.log("Cookie set");
}

// Form Validation using jQuery
$("#contactForm").submit(function(e){
  e.preventDefault();

  let name = $("#name").val();
  let email = $("#email").val();

  if(name === "" || email === ""){
    $("#msg").text("All fields required");
  } else {
    $("#msg").text("Form submitted successfully");
  }
});
