function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || phone === "" || message === ""){
    document.getElementById("contactResult").innerText =
      "Please fill all fields";
    return;
  }

  document.getElementById("contactResult").innerText =
    "Thank you " + name + "! Your message has been sent successfully.";

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}
