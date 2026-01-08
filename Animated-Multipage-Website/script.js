document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    alert("All fields required");
  } else {
    alert("Form submitted successfully");
  }
});
