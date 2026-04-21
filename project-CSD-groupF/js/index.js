// REMEMBER US (Local Storage)
function saveVisit() {
  localStorage.setItem("visited", "yes");
  alert("Welcome! Your visit has been saved. We’ll remember you next time 😊");
}

// COOKIE IMPLEMENTATION
if (document.cookie.indexOf("user=1") === -1) {
  document.cookie = "user=1; path=/;";
  console.log("Cookie set");
}

// SHOW / HIDE ABOUT NEPAL SECTION
function toggleAbout() {
  const box = document.getElementById("aboutNepal");
  box.style.display = (box.style.display === "none" || box.style.display === "") 
    ? "block" 
    : "none";
}

// FORM VALIDATION (jQuery)
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
