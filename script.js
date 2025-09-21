const eyeIcon = document.querySelector("#eyeIcon");
const password = document.querySelector("#password");

function iconToggle(icon) {
  if (icon.classList.contains("ri-eye-off-line")) {
    eyeIcon.classList.remove("ri-eye-off-line");
    eyeIcon.classList.add("ri-eye-line");
  } else {
    eyeIcon.classList.add("ri-eye-off-line");
    eyeIcon.classList.remove("ri-eye-line");
  }
}

function inputTypeToggle(pass) {
  pass.type = pass.type === "password" ? "text" : "password";
  iconToggle(eyeIcon);
}

// Toggle with eye icon click
eyeIcon.addEventListener("click", (e) => {
  inputTypeToggle(password);
});

// Toggle with shortcut
document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key.toUpperCase() === "P") {
    inputTypeToggle(password);
  }
});
